const puppeteer = require("puppeteer");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

module.exports = async (req, res) => {
  let browser;
  try {
    const input = req.body.input || "No input provided.";
    const chartHtml = req.body.chartHtml || "<p>No chart HTML provided.</p>";

    // Step 1: Render chart HTML as PNG with Puppeteer
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    await page.setContent(chartHtml, { waitUntil: "networkidle0" });

    // 等待图表元素加载
    await page.waitForSelector("#marketShareChart, #growthChart", { timeout: 10000 }).catch(() => {
      console.warn("图表元素未及时出现，尝试继续执行");
    });

    // 等待 Chart.js 图表绘制完成
    await page.waitForFunction(() => {
      return window.Chart && Object.keys(Chart.instances || {}).length > 0;
    }, { timeout: 10000 }).catch(() => {
      console.warn("Chart.js 图表可能未完全绘制，继续尝试截图");
    });

    // 获取图表高度并设置截图区域
    const chartElement = await page.$("#marketShareChart") || await page.$("#growthChart");

    if (!chartElement) {
      console.error("图表元素未找到");
      res.status(500).send("图表元素未找到");
      return;
    }

    // 获取元素的高度（动态）
    const chartBoundingBox = await chartElement.boundingBox();
    const chartHeight = chartBoundingBox.height;

    // 截图整个图表区域，确保完整捕获
    const chartBuffer = await page.screenshot({
      type: "png",
      clip: {
        x: chartBoundingBox.x,
        y: chartBoundingBox.y,
        width: chartBoundingBox.width,
        height: chartHeight // 使用获取的动态高度
      }
    });

    // Step 2: Create PDF
    const pdfDoc = await PDFDocument.create();
    const pdfPage = pdfDoc.addPage([595, 842]); // A4 尺寸
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const pngImage = await pdfDoc.embedPng(chartBuffer);

    // 标题
    pdfPage.drawText("Market Analysis Report", {
      x: 50,
      y: 800,
      size: 18,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // 文本内容
    pdfPage.drawText(input, {
      x: 50,
      y: 770,
      size: 12,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
      maxWidth: 500,
    });

    // 插入图表图像，按比例缩放
    const { width, height } = pngImage.scaleToFit(500, 600);
    pdfPage.drawImage(pngImage, {
      x: 50,
      y: 400,
      width,
      height,
    });

    const pdfBytes = await pdfDoc.save();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=market-report.pdf");
    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    console.error("Error generating PDF report:", err);
    res.status(500).send("Internal Server Error");
  } finally {
    if (browser) await browser.close(); // 确保资源关闭
  }
};
