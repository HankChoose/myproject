"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRow = void 0;
const form_row_st_css_1 = require("./form-row.st.css");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FormRow = ({ className, children }) => {
    return <div className={(0, form_row_st_css_1.st)(form_row_st_css_1.classes.root, className)}> {children}</div>;
};
exports.FormRow = FormRow;
