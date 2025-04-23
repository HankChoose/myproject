"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const input_module_scss_1 = __importDefault(require("./input.module.scss"));
const react_1 = require("react");
const Input = ({ className, id, name }) => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [isValid, setIsValid] = (0, react_1.useState)(false);
    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(input_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsx)("input", { className: input_module_scss_1.default.Input, type: "text", placeholder: "Email", value: email, onChange: handleEmailChange }) }));
};
exports.Input = Input;
