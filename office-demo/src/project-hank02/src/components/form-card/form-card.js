"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const form_card_st_css_1 = require("./form-card.st.css");
const input_1 = require("../input/input");
const inputpw_1 = require("../inputpw/inputpw");
const button_1 = require("../button/button");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FormCard = ({ className, formType = 'signin', children }) => {
    const linkresetpw = formType === 'signin' ? (0, jsx_runtime_1.jsx)("a", { id: "resetpw", children: "Forgot my password" }) : formType === 'signup' ? (0, jsx_runtime_1.jsx)("span", {}) : (0, jsx_runtime_1.jsx)("span", {});
    const linksign = formType === 'signin' ? (0, jsx_runtime_1.jsx)("a", { id: "linksignup", href: "/signup", children: "Sign Up" }) : formType === 'signup' ? (0, jsx_runtime_1.jsx)("a", { id: "linksignin", href: "/signin", children: "Sign In" }) : (0, jsx_runtime_1.jsx)("span", {});
    const titlecard = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : (0, jsx_runtime_1.jsx)("span", {});
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, form_card_st_css_1.st)(form_card_st_css_1.classes.root, className), children: [children, linksign, (0, jsx_runtime_1.jsx)("h1", { children: titlecard }), (0, jsx_runtime_1.jsx)("a", { id: "linksignin", href: "/signin", children: "Sign In 1111 " }), (0, jsx_runtime_1.jsx)(input_1.Input, {}), (0, jsx_runtime_1.jsx)("a", { id: "linksignin", href: "/signup", children: "Sign Up 2222" }), (0, jsx_runtime_1.jsx)(inputpw_1.Inputpw, {}), linkresetpw, (0, jsx_runtime_1.jsxs)(button_1.Button, { children: [" ", titlecard, " "] })] });
};
exports.FormCard = FormCard;
