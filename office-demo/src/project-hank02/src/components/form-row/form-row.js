"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const form_row_st_css_1 = require("./form-row.st.css");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FormRow = ({ className, children }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, form_row_st_css_1.st)(form_row_st_css_1.classes.root, className), children: [" ", children] });
};
exports.FormRow = FormRow;
