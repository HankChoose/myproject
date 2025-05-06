const { Document, Packer, Paragraph, Media } = require("docx");
const puppeteer = require("puppeteer");

module.exports = async (req, res) => {
  try {
    const input = req.body?.input || "No input provided.";
    const chartHtml = req.body?.chartHtml;

    if (!chartHtml) {
      console.warn("No chartHtml provided in request.");
    }

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath(),
    });

    const page = await browser.newPage();
    await page.setContent(chartHtml || "<p>No chart provided</p>");
    const chartBuffer = await page.screenshot({ type: "png" });
    await browser.close();

    // Create image to be used inside the document
    const image = Media.addImage(new Document(), chartBuffer);

    // Create doc with required `sections` field
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
            image,
            new Paragraph("Report powered by Divorcepath API"),
          ],
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
