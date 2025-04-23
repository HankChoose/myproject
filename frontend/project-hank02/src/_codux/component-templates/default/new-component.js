"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const new_component_st_css_1 = require("./new-component.st.css");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const NewComponent = ({ className }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: (0, new_component_st_css_1.st)(new_component_st_css_1.classes.root, className), children: "NewComponent" });
};
exports.NewComponent = NewComponent;
