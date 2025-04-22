"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const input_st_css_1 = require("./input.st.css");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Input = ({ className }) => {
    return <div className={(0, input_st_css_1.st)(input_st_css_1.classes.root, className)}>
        <input placeholder="Email"></input>
        </div>;
};
exports.Input = Input;
