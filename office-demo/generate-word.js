const { Document, Packer, Paragraph, Media } = require("docx");
const puppeteer = require("puppeteer");

module.exports = async (req, res) => {
  try {
    const input = req.body?.input || "No input provided.";
    const chartHtml = req.body?.chartHtml;

    if (!chartHtml) {
      console.warn("No chartHtml provided in request.");
      res.status(400).json({ error: "chartHtml is required" });
      return;
    }

    // 启动 Puppeteer 浏览器并渲染 HTML 内容
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath(),
    });

    const page = await browser.newPage();
    
    // 设置页面内容并等待图表加载完成
    await page.setContent(chartHtml, { waitUntil: "networkidle0" });

    // 等待 Chart.js 渲染完成
    await page.waitForSelector("#marketShareChart, #growthChart", { timeout: 5000 }).catch(() => {
      console.warn("Chart elements not found in time.");
    });

    // 加点延迟确保图表渲染完毕
    await page.waitForTimeout(1000);

    // 截取图表并转为 PNG 图片
    const chartBuffer = await page.screenshot({ type: "png" });

    await browser.close();

    // 创建新的 Document 实例
    const image = Media.addImage(new Document(), chartBuffer);

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph("Divorcepath Legal Report"),
            new Paragraph("========================="),
            new Paragraph(input),
            new Paragraph(" "),
            new Paragraph("- Property: Requires division"),
            new Paragraph("- Support: Child and spousal support likely"),
            new Paragraph("- Timeline: Estimated 6–9 months"),
            new Paragraph("- Recommendations: Consider mediation, income reassessment"),
            new Paragraph(" "),
            new Paragraph("Chart Analysis:"),
            image, // 插入图表
            new Paragraph("Report powered by Divorcepath API"),
          ],
        },
      ],
    });

    // 将生成的文档转换为 buffer 格式
    const buffer = await Packer.toBuffer(doc);

    // 设置响应头并返回 Word 文件
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", "attachment; filename=divorce-report.docx");
    res.send(buffer);

  } catch (err) {
    console.error("Error generating Word report:", err.stack || err);
    res.status(500).json({ error: "Failed to generate Word document", details: err.message });
  }
};
