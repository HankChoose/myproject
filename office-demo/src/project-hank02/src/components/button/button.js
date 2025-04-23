"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const button_st_css_1 = require("./button.st.css");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Button = ({ className, children }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, button_st_css_1.st)(button_st_css_1.classes.root, className), children: [(0, jsx_runtime_1.jsx)("button", {}), " ", children, " "] });
};
exports.Button = Button;
