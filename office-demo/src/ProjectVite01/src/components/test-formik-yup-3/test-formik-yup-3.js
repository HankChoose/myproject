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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFormikYup3 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
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
        .max(20, 'Phone number must be 20 characters or less'),
    username: Yup.string()
        .matches(/^[^\s-]+$/, 'Username cannot contain spaces or -')
        .max(30, 'Username must be 30 characters or less')
        .required('Username is required'),
    message: Yup.string().max(1000, 'Message must be 1000 characters or less'),
});
const initialValues = {
    email: '',
    phone: '',
    username: '',
    message: '',
};
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestFormikYup3 = ({ className }) => {
    const onSubmit = (values) => {
        // 处理表单提交逻辑
        console.log(values);
    };
    return ((0, jsx_runtime_1.jsx)(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: onSubmit, children: (0, jsx_runtime_1.jsxs)(formik_1.Form, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { type: "text", id: "email", name: "email" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "email", component: "div" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "phone", children: "Phone" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { type: "text", id: "phone", name: "phone" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "phone", component: "div" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "username", children: "Username" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { type: "text", id: "username", name: "username" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "username", component: "div" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "message", children: "Message" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { as: "textarea", id: "message", name: "message" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "message", component: "div" })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Submit" })] }) }));
};
exports.TestFormikYup3 = TestFormikYup3;
