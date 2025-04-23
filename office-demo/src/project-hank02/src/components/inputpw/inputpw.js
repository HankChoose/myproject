"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inputpw = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const inputpw_st_css_1 = require("./inputpw.st.css");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Inputpw = ({ className }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: (0, inputpw_st_css_1.st)(inputpw_st_css_1.classes.root, className), children: (0, jsx_runtime_1.jsx)("input", { type: "password" }) });
};
exports.Inputpw = Inputpw;
