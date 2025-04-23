"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUpload = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const js_cookie_1 = __importDefault(require("js-cookie"));
const constants_1 = require("../../constants");
const TestUpload = ({ className }) => {
    const [files, setFiles] = (0, react_1.useState)([]);
    const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;
        setFiles((prevFiles) => {
            const newFiles = [];
            for (let i = 0; i < selectedFiles.length; i++) {
                newFiles.push(selectedFiles[i]);
            }
            return [...prevFiles, ...selectedFiles];
        });
    };
    const handleUpload = () => __awaiter(void 0, void 0, void 0, function* () {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append(`uploadedImages[${i}]`, files[i]);
        }
        //formData.append('applytype', 'YourApplyType');
        //formData.append('requirements', 'YourRequirements');
        //formData.append('mainImageId', 'YourMainImageId');
        // Logging the FormData entries
        formData.forEach((value, key) => {
            console.log('formData[' + key + ']', value);
        });
        try {
            // 发送请求到Django的上传接口
            const response = yield axios_1.default.post(`${constants_1.baseUrl}/upload2/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
                },
            });
            console.log(response.data);
        }
        catch (error) {
            console.error('Error uploading files:', error);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "file", multiple: true, onChange: handleFileChange }), (0, jsx_runtime_1.jsx)("button", { onClick: handleUpload, children: "Upload" })] }));
};
exports.TestUpload = TestUpload;
