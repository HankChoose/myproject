const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

module.exports = async (req, res) => {
	const input = req.body.input || "No input";
	const pdfDoc = await PDFDocument.create();
	const page = pdfDoc.addPage();
	const { width, height } = page.getSize();
	const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
	const fontSize = 12;

	page.drawText(input, {
		x: 50,
		y: height - 50,
		size: fontSize,
		font,
		color: rgb(0, 0, 0)
	});

	const pdfBytes = await pdfDoc.save();
	res.setHeader("Content-Type", "application/pdf");
	res.setHeader("Content-Disposition", "attachment; filename=report.pdf");
	res.send(Buffer.from(pdfBytes));
};
