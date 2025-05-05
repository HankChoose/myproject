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
var callDivorcepathAPI = function (text) { return __awaiter(_this, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/office-demo/api/divorcepath", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ input: text }),
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
var callAIApi = function (text) { return __awaiter(_this, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/office-demo/api/ai-summary", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ input: text }),
                })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data.summary];
        }
    });
}); };
function generateWebReport() {
    return __awaiter(this, void 0, void 0, function () {
        var input, report;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = document.getElementById("inputText").value;
                    return [4 /*yield*/, callDivorcepathAPI(input)];
                case 1:
                    report = _a.sent();
                    document.getElementById("output").innerText = report;
                    return [2 /*return*/];
            }
        });
    });
}
function generateWordReport() {
    return __awaiter(this, void 0, void 0, function () {
        var input, report;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = document.getElementById("inputText").value;
                    return [4 /*yield*/, callDivorcepathAPI(input)];
                case 1:
                    report = _a.sent();
                    return [4 /*yield*/, Word.run(function (context) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        context.document.body.insertText(report, Word.InsertLocation.end);
                                        return [4 /*yield*/, context.sync()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function insertWebAISummary() {
    return __awaiter(this, void 0, void 0, function () {
        var input, summary;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = document.getElementById("inputText").value;
                    return [4 /*yield*/, callAIApi(input)];
                case 1:
                    summary = _a.sent();
                    document.getElementById("output").innerText = summary;
                    return [2 /*return*/];
            }
        });
    });
}
function insertWordAISummary() {
    return __awaiter(this, void 0, void 0, function () {
        var input, summary;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = document.getElementById("inputText").value;
                    return [4 /*yield*/, callAIApi(input)];
                case 1:
                    summary = _a.sent();
                    return [4 /*yield*/, Word.run(function (context) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        context.document.body.insertText(summary, Word.InsertLocation.end);
                                        return [4 /*yield*/, context.sync()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
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
                        alert("✅ Zapier Notification Sent!");
                    }
                    else {
                        alert("❌ Failed to send Zapier notification.");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function downloadWordReport() {
    return __awaiter(this, void 0, void 0, function () {
        var outputContent, response, blob, url, a;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    outputContent = document.getElementById("output").innerText;
                    return [4 /*yield*/, fetch("/office-demo/api/word?input=".concat(encodeURIComponent(outputContent)))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        console.error("❌ Failed to download Word document.");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, response.blob()];
                case 2:
                    blob = _a.sent();
                    url = URL.createObjectURL(blob);
                    a = document.createElement("a");
                    a.href = url;
                    a.download = "Divorcepath-Report.docx";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    return [2 /*return*/];
            }
        });
    });
}
function downloadPDFReport() {
    return __awaiter(this, void 0, void 0, function () {
        var input, res, blob, url, a;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = document.getElementById("output").innerText;
                    return [4 /*yield*/, fetch("/office-demo/api/pdf", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ input: input })
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.blob()];
                case 2:
                    blob = _a.sent();
                    url = window.URL.createObjectURL(blob);
                    a = document.createElement("a");
                    a.href = url;
                    a.download = "divorcepath-report.pdf";
                    a.click();
                    window.URL.revokeObjectURL(url);
                    return [2 /*return*/];
            }
        });
    });
}
// taskpane.ts
var callPreviewAPI = function (input) { return __awaiter(_this, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/api/preview", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ input: input }),
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
function generatePreview() {
    return __awaiter(this, void 0, void 0, function () {
        var input, previewHtml, outputDiv;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = document.getElementById("inputText").value;
                    return [4 /*yield*/, callPreviewAPI(input)];
                case 1:
                    previewHtml = _a.sent();
                    outputDiv = document.getElementById("output");
                    if (outputDiv) {
                        outputDiv.innerHTML = previewHtml;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
