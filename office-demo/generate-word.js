const { Document, Packer, Paragraph, HeadingLevel, ImageRun } = require("docx");
const puppeteer = require("puppeteer");

module.exports = async (req, res) => {
  try {
    console.log("Request Body:", req.body); 
    
    // 解构请求体中的数据
    const {
      input = "No input provided.",
      chartHtml,
      productName = "N/A",
      mainCompetitors = [],
    } = req.body || {};

    // 处理 input 字符串，如果是字符串格式的 JSON 则进行解析
    let parsedInput;
    try {
      // 确保 input 是一个合法的 JSON 字符串并解析它
      parsedInput = typeof input === "string" ? JSON.parse(input) : input;
    } catch (e) {
      console.error("Error parsing input JSON:", e);
      parsedInput = input; // 如果解析失败，保持原值
    }

    // 确保 mainCompetitors 是一个数组
    const competitors = Array.isArray(mainCompetitors) ? mainCompetitors : [mainCompetitors];

    if (!chartHtml) {
      console.warn("No chartHtml provided in request.");
      return res.status(400).json({ error: "chartHtml is required" });
    }

    // 启动 Puppeteer 浏览器并截图
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

    await new Promise((resolve) => setTimeout(resolve, 500)); // 等待图表渲染
    const chartBuffer = await page.screenshot({ type: "png" });
    await browser.close();

    // 处理解析后的 data，确保使用解析后的数据
    const finalProductName = parsedInput.productName || "No product name provided";
    const finalCompetitors = Array.isArray(parsedInput.mainCompetitors) 
                              ? parsedInput.mainCompetitors.join(", ")
                              : parsedInput.mainCompetitors || "No competitors provided";

    // 创建 Word 文档内容
    const content = [
      new Paragraph({
        text: "Market Analysis Report",
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph("========================="),
      new Paragraph(parsedInput),
      new Paragraph(" "),
      new Paragraph(`- Product Name: ${finalProductName}`),
      new Paragraph(`- Main Competitors: ${finalCompetitors}`),
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

    // 创建 Word 文档
    const doc = new Document({
      sections: [
        {
          children: content,
        },
      ],
    });

    // 生成 Word 文件并发送响应
    const buffer = await Packer.toBuffer(doc);
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", "attachment; filename=Market Competitiveness Analysis Report.docx");
    res.send(buffer);

  } catch (err) {
    console.error("Error generating Word report:", err.stack || err);
    res.status(500).json({ error: "Failed to generate Word document", details: err.message });
  }
};
