const { Document, Packer, Paragraph, Media } = require("docx");
const puppeteer = require("puppeteer");

module.exports = async (req, res) => {
  const input = req.body.input || "No input provided.";
  const chartHtml = req.body.chartHtml || "<p>No chart HTML provided.</p>";

  // Step 1: Render HTML to PNG using Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(chartHtml);
  const chartBuffer = await page.screenshot({ type: "png" });
  await browser.close();

  // Step 2: Create Word document
  const doc = new Document();
  const image = Media.addImage(doc, chartBuffer);

  doc.addSection({
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
  });

  const buffer = await Packer.toBuffer(doc);
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
  res.setHeader("Content-Disposition", "attachment; filename=divorce-report.docx");
  res.send(buffer);
};
