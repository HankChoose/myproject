"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inputpw = void 0;
const inputpw_st_css_1 = require("./inputpw.st.css");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Inputpw = ({ className }) => {
    return <div className={(0, inputpw_st_css_1.st)(inputpw_st_css_1.classes.root, className)}>
        <input type="password"/></div>;
};
exports.Inputpw = Inputpw;
