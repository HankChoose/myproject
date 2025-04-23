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
exports.TestChangePW = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_change_pw_module_scss_1 = __importDefault(require("./test-change-pw.module.scss"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestChangePW = ({ className }) => {
    const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
    const [email, setEmail] = (0, react_1.useState)('');
    const handlePasswordReset = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const requestData = {
            email: email,
        };
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            },
            body: JSON.stringify(requestData),
        };
        const apiUrl = `${constants_1.baseUrl}/accounts/password/reset/`;
        try {
            const response = yield axios_1.default.post(apiUrl, requestData, config);
            if (response.status === 200) {
                console.log('Password reset email sent:', response.data);
            }
            else {
                console.error('Password reset email sent failed');
            }
        }
        catch (error) {
            console.error('Error sending password reset email:', error);
        }
    });
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_change_pw_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handlePasswordReset, children: [(0, jsx_runtime_1.jsxs)("label", { children: ["Email:", (0, jsx_runtime_1.jsx)("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value) })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Send Password Reset Email" })] }) });
};
exports.TestChangePW = TestChangePW;
