const { Document, Packer, Paragraph, HeadingLevel, ImageRun } = require("docx");
const puppeteer = require("puppeteer");

module.exports = async (req, res) => {
  try {

    console.log("Request Body:", req.body); 
    const {
      input = "No input provided.",
      chartHtml,
      productName = "N/A",
      mainCompetitors = [],
    } = req.body || {};

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
    await page.setViewport({ width: 600, height: 1000 });
    await page.setContent(chartHtml, { waitUntil: "networkidle0" });
    await page.waitForSelector("#marketShareChart, #growthChart").catch(() => {
      console.warn("Charts not rendered in time.");
    });

    await new Promise((resolve) => setTimeout(resolve, 500));
    const chartBuffer = await page.screenshot({ type: "png" });
    await browser.close();

    const content = [
      new Paragraph({
        text: "Market Analysis Report",
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph("========================="),
      new Paragraph(input),
      new Paragraph(" "),
      new Paragraph(`- Product Name: ${productName || "No product name provided"}`),
new Paragraph(`- Main Competitors: ${Array.isArray(mainCompetitors) ? mainCompetitors.join(", ") : "No competitors provided"}`),
      new Paragraph("- Timeline: Estimated 6–9 months"),
      new Paragraph("- Recommendations: Consider mediation, income reassessment"),
      new Paragraph(" "),
      new Paragraph("Chart Analysis:"),
      new Paragraph({
        children: [
          new ImageRun({
            data: chartBuffer,
            transformation: {
              width: 500,
              height: 300,
            },
          }),
        ],
      }),
      new Paragraph("Report powered by Market-analysis API"),
    ];

    const doc = new Document({
      sections: [
        {
          children: content,
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);

    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", "attachment; filename=Market Competitiveness Analysis Report.docx");
    res.send(buffer);

  } catch (err) {
    console.error("Error generating Word report:", err.stack || err);
    res.status(500).json({ error: "Failed to generate Word document", details: err.message });
  }
};
