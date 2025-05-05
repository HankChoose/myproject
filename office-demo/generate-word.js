// generate-word.js
const { Document, Packer, Paragraph } = require("docx");

module.exports = async (req, res) => {
  const input = req.body.input || "No input provided.";

  // Create a new Word document
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
          new Paragraph("Report powered by Divorcepath API"),
        ],
      },
    ],
  });

  // Convert document to buffer
  const buffer = await Packer.toBuffer(doc);

  // Set response headers for Word document download
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
  res.setHeader("Content-Disposition", "attachment; filename=divorce-report.docx");
  res.send(buffer);
};
