var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/// <reference types="office-js" />
Office.onReady(function () {
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
function debounce(func, delay) {
    var timeoutId;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(function () { return func.apply(_this, args); }, delay);
    };
}
function gatherFormInput() {
    var productName = document.getElementById("productName").value.trim();
    var targetMarket = document.getElementById("targetMarket").value.trim();
    var mainCompetitorsStr = document.getElementById("mainCompetitors").value.trim();
    var productAdvantages = document.getElementById("productAdvantages").value.trim();
    var expectedPriceStr = document.getElementById("expectedPrice").value.trim();
    return {
        productName: productName,
        targetMarket: targetMarket,
        mainCompetitors: mainCompetitorsStr.split(",").map(function (s) { return s.trim(); }).filter(Boolean), // 逗号分隔
        productAdvantages: productAdvantages,
        expectedPrice: parseFloat(expectedPriceStr) || 0,
    };
}
var callMarketReportAPI = function (formData) { return __awaiter(_this, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/office-demo/api/market-analysis", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data.report];
        }
    });
}); };
function generateWebReport() {
    return __awaiter(this, void 0, void 0, function () {
        var formData, report;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = gatherFormInput();
                    return [4 /*yield*/, callMarketReportAPI(formData)];
                case 1:
                    report = _a.sent();
                    document.getElementById("output").innerText = report;
                    return [2 /*return*/];
            }
        });
    });
}
window.onload = function () {
    var debouncedGenerate = debounce(generateWebReport, 300);
    // 页面初次加载就生成一次
    generateWebReport();
    var inputIds = [
        "productName",
        "targetMarket",
        "mainCompetitors",
        "productAdvantages",
        "expectedPrice",
    ];
    inputIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) {
            el.addEventListener("input", debouncedGenerate);
            el.addEventListener("change", debouncedGenerate);
        }
    });
};
function gatherFormInputRecord() {
    return {
        productName: document.getElementById("productName").value.trim(),
        targetMarket: document.getElementById("targetMarket").value.trim(),
        mainCompetitors: Array.from(document.getElementById("mainCompetitors").selectedOptions).map(function (opt) { return opt.value; }).join(", "),
        productAdvantages: document.getElementById("productAdvantages").value.trim(),
        expectedPrice: document.getElementById("expectedPrice").value.trim(),
    };
}
var callPreviewAPI = function (inputData) { return __awaiter(_this, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/office-demo/api/market-preview", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(inputData), // 发送完整结构
                })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data.html];
        }
    });
}); };
var lastPreviewHtml = ""; // 保存预览 HTML 给下载用
function generatePreview() {
    return __awaiter(this, void 0, void 0, function () {
        var inputData, previewHtml, iframe, downloadBtn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputData = gatherFormInputRecord();
                    console.log(inputData); // 调试输出，确认数据格式和内容
                    return [4 /*yield*/, callPreviewAPI(inputData)];
                case 1:
                    previewHtml = _a.sent();
                    lastPreviewHtml = previewHtml;
                    iframe = document.getElementById("previewFrame");
                    ;
                    if (!iframe) {
                        console.error("iframe not found.");
                        return [2 /*return*/];
                    }
                    // 确保 iframe 加载完成后写入内容
                    iframe.srcdoc = previewHtml; // 直接设置 srcdoc 属性
                    // 监听 iframe 加载完成
                    iframe.onload = function () {
                        var _a;
                        var iframeDoc = iframe.contentDocument || ((_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document);
                        if (iframeDoc) {
                            iframeDoc.open();
                            iframeDoc.write(previewHtml); // ✅ 直接写入完整 HTML
                            iframeDoc.close();
                        }
                    };
                    downloadBtn = document.getElementById("downloadBtn");
                    if (downloadBtn) {
                        downloadBtn.classList.remove("hidden");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function downloadWordReport() {
    var _a;
    var input = JSON.stringify(gatherFormInputRecord(), null, 2); // 拼成可读字符串
    var chartIframe = document.querySelector("iframe");
    var chartHtml = ((_a = chartIframe === null || chartIframe === void 0 ? void 0 : chartIframe.contentDocument) === null || _a === void 0 ? void 0 : _a.documentElement.outerHTML) || "";
    fetch("/office-demo/api/generate-word", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            input: input,
            chartHtml: lastPreviewHtml, // ✅ 关键：发送生成好的 HTML
        }),
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.blob();
    })
        .then(function (blob) {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "MarketAnalysisReport.docx";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    })
        .catch(function (error) {
        console.error('There was a problem with the fetch operation:', error);
    });
}
function downloadPDFReport() {
    return __awaiter(this, void 0, void 0, function () {
        var input, chartIframe, iframeLoaded, chartHtml, response, blob, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = JSON.stringify(gatherFormInputRecord(), null, 2);
                    chartIframe = document.querySelector("#previewFrame");
                    if (!chartIframe) {
                        console.error("Chart chartIFrame not found");
                        alert("图表 chartIFrame 未找到。");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, new Promise(function (resolve) {
                            var _a;
                            if (((_a = chartIframe.contentDocument) === null || _a === void 0 ? void 0 : _a.readyState) === "complete") {
                                resolve(true);
                            }
                            else {
                                chartIframe.onload = function () { return resolve(true); };
                                // 加个保险：最多等待5秒
                                setTimeout(function () { return resolve(false); }, 5000);
                            }
                        })];
                case 1:
                    iframeLoaded = _a.sent();
                    if (!iframeLoaded || !chartIframe.contentDocument) {
                        console.error("Chart iframe did not load properly");
                        alert("图表尚未加载完成，请稍后再试。");
                        return [2 /*return*/];
                    }
                    chartHtml = chartIframe.contentDocument.documentElement.outerHTML;
                    if (!chartHtml || chartHtml.trim().length < 100) {
                        console.warn("chartHtml seems too short");
                        alert("图表内容为空，可能尚未渲染完成。");
                        return [2 /*return*/];
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch("/office-demo/api/generate-pdf", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ input: input, chartHtml: chartHtml }),
                        })];
                case 3:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Server error: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.blob()];
                case 4:
                    blob = _a.sent();
                    downloadBlob(blob, "market-analysis-report.pdf");
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error("Failed to download PDF report:", err_1);
                    alert("生成报告失败，请查看控制台日志。");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
function sendZapier() {
    return __awaiter(this, void 0, void 0, function () {
        var input, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = document.getElementById("inputText").value;
                    return [4 /*yield*/, fetch("/office-demo/api/zapier", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ message: input, timestamp: Date.now() }),
                        })];
                case 1:
                    result = _a.sent();
                    if (result.ok) {
                        console.error("✅ Zapier Notification Sent!");
                    }
                    else {
                        console.error("❌ Failed to send Zapier notification.");
                    }
                    return [2 /*return*/];
            }
        });
    });
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
