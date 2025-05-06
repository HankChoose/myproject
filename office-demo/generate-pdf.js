const puppeteer = require("puppeteer");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

module.exports = async (req, res) => {
  const input = req.body.input || "No input provided.";
  const chartHtml = req.body.chartHtml || "<p>No chart HTML provided.</p>";

  // Step 1: Render chart HTML as PNG
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(chartHtml);
  const chartBuffer = await page.screenshot({ type: "png" });
  await browser.close();

  // Step 2: Create PDF with pdf-lib
  const pdfDoc = await PDFDocument.create();
  const page1 = pdfDoc.addPage([595, 842]); // A4

  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const pngImage = await pdfDoc.embedPng(chartBuffer);

  page1.drawText("Divorcepath Legal Report", {
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
};
