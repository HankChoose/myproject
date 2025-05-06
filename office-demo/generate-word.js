const { Document, Packer, Paragraph, HeadingLevel, ImageRun } = require("docx");
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

    // 构建文档内容
    const content = [
      new Paragraph({
        text: "Market Analysis Report",
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
      new Paragraph({
        children: [
          new ImageRun({
            data: chartBuffer,
            transformation: {
              width: 600,
              height: 300,
            },
          }),
        ],
      }),
      new Paragraph("Report powered by Market-analysis API"),
    ];

    // 正确创建 Document，仅包含 sections 字段
    const doc = new Document({
      sections: [
        {
          children: content,
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);

    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", "attachment; filename=divorce-report.docx");
    res.send(buffer);

  } catch (err) {
    console.error("Error generating Word report:", err.stack || err);
    res.status(500).json({ error: "Failed to generate Word document", details: err.message });
  }
};
