const { Document, Packer, Paragraph, Media, HeadingLevel } = require("docx");
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

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath(),
    });

    const page = await browser.newPage();
    await page.setContent(chartHtml, { waitUntil: "networkidle0" });
    await page.waitForSelector("#marketShareChart, #growthChart").catch(() => {
      console.warn("Charts not rendered in time.");
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const chartBuffer = await page.screenshot({ type: "png" });
    await browser.close();

    // 构建段落和图片内容
    const content = [
      new Paragraph({
        text: "Divorcepath Legal Report",
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph("========================="),
      new Paragraph(input),
      new Paragraph(" "),
      new Paragraph("- Property: Requires division"),
      new Paragraph("- Support: Child and spousal support likely"),
      new Paragraph("- Timeline: Estimated 6–9 months"),
      new Paragraph("- Recommendations: Consider mediation, income reassessment"),
      new Paragraph(" "),
      new Paragraph("Chart Analysis:"),
      Media.addImage(new Document({ sections: [] }), chartBuffer), // 用临时空 doc 来插入图片
      new Paragraph("Report powered by Divorcepath API"),
    ];

    // ✅ 正确创建 Document：只保留 sections 字段
    const doc = new Document({
      sections: [
        {
          children: content,
        },
      ],
    });

    // 转换为 Word 文档缓冲区
    const buffer = await Packer.toBuffer(doc);

    // 返回 Word 文件
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", "attachment; filename=divorce-report.docx");
    res.send(buffer);

  } catch (err) {
    console.error("Error generating Word report:", err.stack || err);
    res.status(500).json({ error: "Failed to generate Word document", details: err.message });
  }
};
