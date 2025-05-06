const puppeteer = require("puppeteer");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

module.exports = async (req, res) => {
  try {
    const input = req.body.input || "No input provided.";
    const chartHtml = req.body.chartHtml || "<p>No chart HTML provided.</p>";

    // Step 1: Render chart HTML as PNG with Puppeteer
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();

    // 加载 HTML，等待网络空闲
    await page.setContent(chartHtml, { waitUntil: "networkidle0" });

    // 等待图表容器出现（根据你的图表 ID 设置）
    await page.waitForSelector("#marketShareChart, #growthChart", { timeout: 5000 }).catch(() => {
      console.warn("图表元素未及时出现，继续截图尝试");
    });

    // 额外等待一秒确保图表绘制完成（可调整）
    await page.waitForTimeout(1000);

    // 截图 chart 区域（或整个页面）
    const chartBuffer = await page.screenshot({ type: "png" });

    await browser.close();

    // Step 2: Create PDF with pdf-lib
    const pdfDoc = await PDFDocument.create();
    const page1 = pdfDoc.addPage([595, 842]); // A4

    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const pngImage = await pdfDoc.embedPng(chartBuffer);

    page1.drawText("Market Analysis Report", {
      x: 50,
      y: 800,
      size: 18,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page1.drawText(input, {
      x: 50,
      y: 770,
      size: 12,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
      maxWidth: 500,
    });

    page1.drawImage(pngImage, {
      x: 50,
      y: 400,
      width: 500,
      height: 300,
    });

    const pdfBytes = await pdfDoc.save();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=divorce-report.pdf");
    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    console.error("Error generating PDF report:", err);
    res.status(500).send("Internal Server Error");
  }
};
