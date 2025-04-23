"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFormikYup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_formik_yup_module_scss_1 = __importDefault(require("./test-formik-yup.module.scss"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestFormikYup = ({ className }) => {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('无效的邮箱地址').required('必须提供邮箱地址'),
        password: Yup.string()
            .min(6, '密码至少要有6个字符')
            .required('必须提供密码'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], '密码必须匹配')
            .required('必须提供确认密码'),
    });
    const handleSubmit = () => {
        // 在这里处理提交逻辑
        console.log('提交的表单数据：');
    };
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_formik_yup_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsx)(formik_1.Formik, { initialValues: { email: '', password: '', confirmPassword: '' }, validationSchema: validationSchema, onSubmit: handleSubmit, children: (0, jsx_runtime_1.jsxs)(formik_1.Form, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "\u7535\u5B50\u90AE\u4EF6\uFF1A" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { type: "text", id: "email", name: "email" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "email", component: "div", className: "error" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "\u5BC6\u7801" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { type: "password", name: "password" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "password", component: "div" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "confirmPassword", children: "\u786E\u8BA4\u5BC6\u7801\uFF1A" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { type: "password", id: "confirmPassword", name: "confirmPassword" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "confirmPassword", component: "div" })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "\u63D0\u4EA4" })] }) }) });
};
exports.TestFormikYup = TestFormikYup;
