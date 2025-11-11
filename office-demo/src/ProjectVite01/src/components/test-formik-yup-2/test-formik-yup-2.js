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
exports.TestFormikYup2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_formik_yup_2_module_scss_1 = __importDefault(require("./test-formik-yup-2.module.scss"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const rx_1 = require("react-icons/rx");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^\-]*$/, 'Password cannot contain special characters--')
        .required('Email address is required'),
    password: Yup.string().min(6, 'Password needs to be at least 6 characters').required('Password required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Password agian required'),
});
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestFormikYup2 = ({ className }) => {
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            // 添加其他字段的初始值
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // 在这里处理表单提交到后端的逻辑
            console.log('Form values submitted:', values);
            // 在这里添加将数据提交到后端的代码
        },
    });
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.root), children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: formik.handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow), children: [" ", (0, jsx_runtime_1.jsx)("a", { href: "https://hankchenv.com", children: "Home" }), "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/signin", children: " Sign In " })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)("h1", { children: "Sign Up" }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)("input", { type: "text", id: "email", name: "email", placeholder: "Email", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.email, className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.Input) }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow), children: formik.touched.email && formik.errors.email ? ((0, jsx_runtime_1.jsx)("div", { children: formik.errors.email })) : null })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsx)("input", { type: showPassword ? 'text' : 'password', id: "password", name: "password", placeholder: "Password", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.password, className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.Inputpw) }), (0, jsx_runtime_1.jsx)("button", { onClick: togglePasswordVisibility, className: test_formik_yup_2_module_scss_1.default.ButtonSee, children: showPassword ? (0, jsx_runtime_1.jsx)(rx_1.RxEyeClosed, {}) : (0, jsx_runtime_1.jsx)(rx_1.RxEyeOpen, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow), children: formik.touched.password && formik.errors.password ? ((0, jsx_runtime_1.jsx)("div", { children: formik.errors.password })) : null })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsx)("input", { type: showPassword ? 'text' : 'password', id: "confirmPassword", name: "confirmPassword", placeholder: "Password again", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.confirmPassword, className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.Inputpw) }), (0, jsx_runtime_1.jsx)("button", { onClick: togglePasswordVisibility, className: test_formik_yup_2_module_scss_1.default.ButtonSee, children: showPassword ? (0, jsx_runtime_1.jsx)(rx_1.RxEyeClosed, {}) : (0, jsx_runtime_1.jsx)(rx_1.RxEyeOpen, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_formik_yup_2_module_scss_1.default.FormRow), children: formik.touched.confirmPassword && formik.errors.confirmPassword ? ((0, jsx_runtime_1.jsx)("div", { children: formik.errors.confirmPassword })) : null })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: test_formik_yup_2_module_scss_1.default.ButtonSubmit, children: "Submit" })] }) }));
};
exports.TestFormikYup2 = TestFormikYup2;
