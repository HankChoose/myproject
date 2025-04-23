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
exports.AskInfo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const ask_info_module_scss_1 = __importDefault(require("./ask-info.module.scss"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .matches(/^[^—]*$/, 'Email cannot contain special characters--')
        .required('Email address is required'),
    phone: Yup.string()
        .nullable()
        .matches(/^[0-9-]+$/, 'Invalid phone number')
        .min(10, 'Phone number must be at least 5 characters')
        .max(20, 'Phone number must be 20 characters or less'),
    username: Yup.string()
        .matches(/^[^\s-]+$/, 'Username cannot contain spaces or -')
        .max(30, 'Username must be 30 characters or less')
        .required('Username is required'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be 1000 characters or less')
        .required('Message is required'),
});
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const AskInfo = ({ className }) => {
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            email: '',
            phone: '',
            username: '',
            message: '',
            // 添加其他字段的初始值
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //handleSignUp(values);
        },
    });
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { className: ask_info_module_scss_1.default.FromArea, children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: formik.handleSubmit, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.FormRowSmall), children: " " }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "text", id: "username", name: "username", placeholder: "Username", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.username, className: (0, classnames_1.default)(ask_info_module_scss_1.default.Input) }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.FormRow), children: formik.touched.username && formik.errors.username ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.ErrorsArea), children: formik.errors.username })) : null })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "text", id: "email", name: "email", placeholder: "Email", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.email, className: (0, classnames_1.default)(ask_info_module_scss_1.default.Input) }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.FormRow), children: formik.touched.email && formik.errors.email ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.ErrorsArea), children: formik.errors.email })) : null })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "text", id: "phone", name: "phone", placeholder: "Phone", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.phone, className: (0, classnames_1.default)(ask_info_module_scss_1.default.Input) }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.FormRow), children: formik.touched.phone && formik.errors.phone ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.ErrorsArea), children: formik.errors.phone })) : null })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("textarea", { id: "message", name: "message", rows: 4, cols: 42, onChange: formik.handleChange, onBlur: (e) => {
                                        formik.handleBlur(e);
                                        formik.handleChange(e); // 触发 onChange 事件
                                    }, placeholder: "Enter text here" }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.FormRow), children: formik.touched.message && formik.errors.message ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(ask_info_module_scss_1.default.ErrorsArea), children: formik.errors.message })) : null })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { type: "submit", className: ask_info_module_scss_1.default.ButtonSubmit, children: "Submit" }) }), (0, jsx_runtime_1.jsx)("div", { children: " " })] }) }) }));
};
exports.AskInfo = AskInfo;
