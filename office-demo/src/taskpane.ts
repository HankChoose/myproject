/// <reference types="office-js" />
Office.onReady(() => {
    console.log("Office.js is ready");
  });
  
 /*
  const callDivorcepathAPI = async (text: string): Promise<string> => {
    const res = await fetch("/office-demo/api/divorcepath", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: text }),
    });
    const data = await res.json();
    return data.report;
  };
  */
  function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeoutId: number;
    return function(this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => func.apply(this, args), delay);
    } as T;
  }
  
    
  function gatherFormInput(): string {
    const productName = (document.getElementById("productName") as HTMLInputElement).value.trim();
    const targetMarket = (document.getElementById("targetMarket") as HTMLSelectElement).value.trim();
    const mainCompetitors = (document.getElementById("mainCompetitors") as HTMLInputElement).value.trim();
    const productAdvantages = (document.getElementById("productAdvantages") as HTMLTextAreaElement).value.trim();
    const expectedPrice = (document.getElementById("expectedPrice") as HTMLInputElement).value.trim();

    return `Product Name: ${productName}
  Target Market: ${targetMarket}
  Main Competitors: ${mainCompetitors}
  Product Advantages: ${productAdvantages}
  Expected Price: ${expectedPrice}`;
  }

  
  const callMarketReportAPI = async (text: string): Promise<string> => {
    const res = await fetch("/office-demo/api/market-analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: text }),
    });
    const data = await res.json();
    return data.report;
  };
  

  async function generateWebReport() {
    //const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
    const input = gatherFormInput();
    const report = await callMarketReportAPI(input);
    document.getElementById("output")!.innerText = report;
  }

  window.onload = () => {
    const debouncedGenerate = debounce(generateWebReport, 300);
  
    // 页面初次加载就生成一次
    generateWebReport();
  
    const inputIds = [
      "productName",
      "targetMarket",
      "mainCompetitors",
      "productAdvantages",
      "expectedPrice",
    ];
  
    inputIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", debouncedGenerate);
        el.addEventListener("change", debouncedGenerate);
      }
    });
  };
  
  
  function gatherFormInputRecord(): Record<string, string> {
    return {
      productName: (document.getElementById("productName") as HTMLInputElement).value.trim(),
      targetMarket: (document.getElementById("targetMarket") as HTMLSelectElement).value.trim(),
      mainCompetitors: Array.from(
        (document.getElementById("mainCompetitors") as HTMLSelectElement).selectedOptions
      ).map((opt) => opt.value).join(", "),
      productAdvantages: (document.getElementById("productAdvantages") as HTMLTextAreaElement).value.trim(),
      expectedPrice: (document.getElementById("expectedPrice") as HTMLInputElement).value.trim(),
    };
  }
 

  const callPreviewAPI = async (inputData: Record<string, string>): Promise<string> => {
    const response = await fetch("/office-demo/api/market-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData), // 发送完整结构
    });
    const data = await response.json();
    return data.html;
   };


  let lastPreviewHtml = ""; // 保存预览 HTML 给下载用

  async function generatePreview() {
    const inputData = gatherFormInputRecord();
    const previewHtml = await callPreviewAPI(inputData);
  
    lastPreviewHtml = previewHtml;
  
    // 获取 iframe 元素
    const iframe = document.getElementById("previewFrame")  as HTMLIFrameElement;;
    if (!iframe) {
        console.error("iframe not found.");
        return;
    }

    // 确保 iframe 加载完成后写入内容
    iframe.srcdoc = previewHtml; // 直接设置 srcdoc 属性

    // 监听 iframe 加载完成
    iframe.onload = function () {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(previewHtml); // ✅ 直接写入完整 HTML
            iframeDoc.close();
        }
    };
    // 显示下载按钮
		const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
      downloadBtn.classList.remove("hidden");
    }
  }
  

function downloadWordReport() {
  const input = JSON.stringify(gatherFormInputRecord(), null, 2); // 拼成可读字符串
  const chartIframe = document.querySelector("iframe") as HTMLIFrameElement;
  const chartHtml = chartIframe?.contentDocument?.documentElement.outerHTML || "";

  fetch("/office-demo/api/generate-word", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input,
      chartHtml: lastPreviewHtml, // ✅ 关键：发送生成好的 HTML
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.blob();
  })
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "divorce-report.docx";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}


async function downloadPDFReport() {
  const input = JSON.stringify(gatherFormInputRecord(), null, 2); // 拼成可读字符串
  const chartIframe = document.querySelector("#previewFrame") as HTMLIFrameElement;

  if (!chartIframe) {
    console.error("Chart chartIFrame not found");
    alert("图表 chartIFrame 未找到。");
    return;
  }

  // 等待 chartIFrame 加载完成
  const iframeLoaded = await new Promise<boolean>((resolve) => {
    if (chartIframe.contentDocument?.readyState === "complete") {
      resolve(true);
    } else {
      chartIframe.onload = () => resolve(true);
      // 加个保险：最多等待5秒
      setTimeout(() => resolve(false), 5000);
    }
  });

  if (!iframeLoaded || !chartIframe.contentDocument) {
    console.error("Chart iframe did not load properly");
    alert("图表尚未加载完成，请稍后再试。");
    return;
  }

  const chartHtml = chartIframe.contentDocument.documentElement.outerHTML;
  if (!chartHtml || chartHtml.trim().length < 100) {
    console.warn("chartHtml seems too short");
    alert("图表内容为空，可能尚未渲染完成。");
    return;
  }

  try {
    const response = await fetch("/office-demo/api/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input, chartHtml }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const blob = await response.blob();
    downloadBlob(blob, "market-analysis-report.pdf");
  } catch (err) {
    console.error("Failed to download PDF report:", err);
    alert("生成报告失败，请查看控制台日志。");
  }
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}


  
async function sendZapier() {
  const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;
  const result = await fetch("/office-demo/api/zapier", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input, timestamp: Date.now() }),
  });

  if (result.ok) {
    console.error("✅ Zapier Notification Sent!");
  } else {
    console.error("❌ Failed to send Zapier notification.");
  }
}

/*
async function downloadWordReport() {
  //const input = (document.getElementById("output") as HTMLTextAreaElement).value;

  //const response = await fetch(`/office-demo/api/word?input=${encodeURIComponent(input)}`);

  // 获取 div 内容
  const outputContent = document.getElementById("output")!.innerText;
 
  // 调用 fetch，传递读取到的内容，这是get方法
  const response = await fetch(`/office-demo/api/word?input=${encodeURIComponent(outputContent)}`);
  if (!response.ok) {
    console.error("❌ Failed to download Word document.");
    return;
  }

  const response = await fetch("/office-demo/api/word", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: outputContent }),
  });

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
  //const input = (document.getElementById("output") as HTMLTextAreaElement).value;
  
  const input =document.getElementById("output")!.innerText;
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

*/
