const { Document, Packer, Paragraph } = require("docx");

module.exports = async (req, res) => {
  try {
    const input = req.body.input || "No input provided.";

    // Step 1: 创建 Word 文档，仅包含输入文本
    const doc = new Document();

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
  } catch (err) {
    console.error("Error generating Word report:", err);
    res.status(500).send("Internal Server Error");
  }
};