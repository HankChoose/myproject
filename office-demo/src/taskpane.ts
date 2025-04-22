/// <reference types="office-js" />
Office.onReady(() => {
    console.log("Office.js is ready");
  });
  
  const callDivorcepathAPI = async (text: string): Promise<string> => {
    const res = await fetch("/divorcepath-api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: text }),
    });
    const data = await res.json();
    return data.report;
  };
  
  const callAIApi = async (text: string): Promise<string> => {
    const res = await fetch("/ai-summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: text }),
    });
    const data = await res.json();
    return data.summary;
  };
  
  async function generateWebReport() {
    const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
    const report = await callDivorcepathAPI(input);
    document.getElementById("output")!.innerText = report;
  }
  
  async function generateWordReport() {
    const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
    const report = await callDivorcepathAPI(input);
  
    await Word.run(async (context) => {
      context.document.body.insertText(report, Word.InsertLocation.end);
      await context.sync();
    });
  }
  
  async function insertWebAISummary() {
    const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
    const summary = await callAIApi(input);
    document.getElementById("output")!.innerText = summary;
  }
  
  async function insertWordAISummary() {
    const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
    const summary = await callAIApi(input);
  
    await Word.run(async (context) => {
      context.document.body.insertText(summary, Word.InsertLocation.end);
      await context.sync();
    });
  }
  
  async function sendZapier() {
    const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
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
  }
  