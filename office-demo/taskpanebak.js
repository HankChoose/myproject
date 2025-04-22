/*
Office.onReady(() => {
  console.log("Office.js is ready");
});

const mockAI = async (text) => {
  try {
    // 模拟调用 AI API 返回摘要
    return "AI Summary:\n" + text.slice(0, 80) + "...";
  } catch (error) {
    console.error("Error in mockAI:", error);
    return "Error generating AI summary.";
  }
};

const mockReport = async (text) => {
  try {
    // 模拟生成报告
    return "Divorcepath Report:\n\n" +
      "Parties were married 8 years with 2 children. " +
      "Income split: John $80k, Jane $40k. " +
      "Expected child support: $XXX.\n\n" +
      "Summary prepared using AI tools.";
  } catch (error) {
    console.error("Error in mockReport:", error);
    return "Error generating report.";
  }
};

async function generateWebReport() {
  try {
    const inputElement = document.getElementById("inputText");
    const input = inputElement ? inputElement.value : "";


    const report = await mockReport(input);
    const outputElement = document.getElementById("output");
    if (outputElement) {
      outputElement.innerText = report;
    } else {
      console.error("Output element not found.");
    }
  } catch (error) {
    console.error("Error in generateWebReport:", error);
  }
}

async function insertWebAISummary() {
  try {
    
    const inputElement = document.getElementById("inputText");
    const input = inputElement ? inputElement.value : "";

    const summary = await mockAI(input);
    const outputElement = document.getElementById("output");
    if (outputElement) {
      outputElement.innerText = summary;
    } else {
      console.error("Output element not found.");
    }
  } catch (error) {
    console.error("Error in insertWebAISummary:", error);
  }
}

async function generateWordReport() {
  try {

    const inputElement = document.getElementById("inputText");
    const input = inputElement ? inputElement.value : "";

    const report = await mockReport(input);
    await Word.run(async (context) => {
      const docBody = context.document.body;
      docBody.insertText(report, Word.InsertLocation.end);
      await context.sync();
    });
  } catch (error) {
    console.error("Error in generateWordReport:", error);
  }
}

async function insertWordAISummary() {
  try {

    const inputElement = document.getElementById("inputText");
    const input = inputElement ? inputElement.value : "";

    const summary = await mockAI(input);
    await Word.run(async (context) => {
      const docBody = context.document.body;
      docBody.insertText(summary, Word.InsertLocation.end);
      await context.sync();
    });
  } catch (error) {
    console.error("Error in insertWordAISummary:", error);
  }
}

async function sendZapier() {
  try {
    const inputElement = document.getElementById("inputText");
    const input = inputElement ? inputElement.value : "";

    const result = await fetch("/zapier-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, timestamp: Date.now() }),
    });

    if (result.ok) {
      alert("✅ Zapier Notification Sent!");
    } else {
      alert("❌ Failed to send Zapier notification.");
    }
  } catch (error) {
    console.error("Error in sendZapier:", error);
  }
}
*/