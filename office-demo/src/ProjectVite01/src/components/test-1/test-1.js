"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_1_module_scss_1 = __importDefault(require("./test-1.module.scss"));
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Test1 = ({ className }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_1_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsxs)("p", { children: ["API URL: ", constants_1.baseUrl] }) });
};
exports.Test1 = Test1;
