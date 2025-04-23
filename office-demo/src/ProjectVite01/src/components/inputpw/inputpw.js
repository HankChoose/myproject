"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inputpw = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const inputpw_module_scss_1 = __importDefault(require("./inputpw.module.scss"));
const react_1 = require("react");
const rx_1 = require("react-icons/rx");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Inputpw = ({ className, children }) => {
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(inputpw_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("input", { type: showPassword ? 'text' : 'password', value: password, placeholder: children, onChange: (e) => setPassword(e.target.value), className: inputpw_module_scss_1.default.Input }), (0, jsx_runtime_1.jsx)("button", { onClick: togglePasswordVisibility, className: inputpw_module_scss_1.default.Button, children: showPassword ? (0, jsx_runtime_1.jsx)(rx_1.RxEyeClosed, {}) : (0, jsx_runtime_1.jsx)(rx_1.RxEyeOpen, {}) })] }));
};
exports.Inputpw = Inputpw;
