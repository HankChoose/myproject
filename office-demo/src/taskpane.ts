/// <reference types="office-js" />
Office.onReady(() => {
    console.log("Office.js is ready");
  });
  
  const callDivorcepathAPI = async (text: string): Promise<string> => {
    const res = await fetch("/office-demo/api/divorcepath", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: text }),
    });
    const data = await res.json();
    return data.report;
  };
  
  const callAIApi = async (text: string): Promise<string> => {
    const res = await fetch("/office-demo/api/ai-summary", {
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
    const result = await fetch("/office-demo/api/zapier", {
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
  

  async function downloadWordReport() {
    const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
  
    const response = await fetch(`/office-demo/api/export-word?input=${encodeURIComponent(input)}`);
    if (!response.ok) {
      console.error("❌ Failed to download Word document.");
      return;
    }
  
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "Divorcepath-Report.docx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function downloadPDFReport() {
    const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
    const res = await fetch("/office-demo/api/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input })
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "divorcepath-report.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  }


  // taskpane.ts

const callPreviewAPI = async (input: string): Promise<string> => {
  const response = await fetch("/api/preview", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });
  const data = await response.json();
  return data.html;
};

async function generatePreview() {
  const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
  const previewHtml = await callPreviewAPI(input);

  // Insert the HTML into the output div
  const outputDiv = document.getElementById("output");
  if (outputDiv) {
    outputDiv.innerHTML = previewHtml;
  }
}

  
  