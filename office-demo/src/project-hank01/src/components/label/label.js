"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const label_module_scss_1 = __importDefault(require("./label.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Label = ({ className, children, htmlFor }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(label_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsxs)("label", { htmlFor: htmlFor, className: label_module_scss_1.default.Label, children: [" ", children, " "] }) }));
};
exports.Label = Label;
