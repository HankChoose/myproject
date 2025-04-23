"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromRowSeparate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const from_row_separate_module_scss_1 = __importDefault(require("./from-row-separate.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FromRowSeparate = ({ className, children }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(from_row_separate_module_scss_1.default.root, className), children: [" ", children] });
};
exports.FromRowSeparate = FromRowSeparate;
