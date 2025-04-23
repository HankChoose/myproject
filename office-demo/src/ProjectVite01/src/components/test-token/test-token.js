"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestToken = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_token_module_scss_1 = __importDefault(require("./test-token.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestToken = ({ className }) => {
    const token = localStorage.getItem('accessToken');
    console.log('Token=', token);
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_token_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsx)("div", { children: token ? ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { children: ["Welcome, ", token] }) })) : ((0, jsx_runtime_1.jsx)("p", { children: "No token." })) }) });
};
exports.TestToken = TestToken;
