"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const form_card_module_scss_1 = __importDefault(require("./form-card.module.scss"));
const form_row_1 = require("../form-row/form-row");
const input_1 = require("../input/input");
const inputpw_1 = require("../inputpw/inputpw");
const button_1 = require("../button/button");
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FormCard = ({ className, formType = 'signin', children }) => {
    const linkresetpw = formType === 'signin' ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/resetpw", children: " Forgot my password " })) : ((0, jsx_runtime_1.jsx)("span", {}));
    const linkheader = formType === 'signin' ? ((0, jsx_runtime_1.jsx)("span", { children: "Need an account?" })) : (formType === 'signup' || formType === 'resetpw') ? ((0, jsx_runtime_1.jsx)("span", { children: "Have an account already?" })) : ((0, jsx_runtime_1.jsx)("span", {}));
    const linksign = formType === 'signin' ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/signup", children: " Sign Up " })) : (formType === 'signup' || formType === 'resetpw') ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/signin", children: " Sign In " })) : ((0, jsx_runtime_1.jsx)("span", {}));
    const Inputpwsign = (formType === 'signin' || formType === 'signup') ? ((0, jsx_runtime_1.jsx)(inputpw_1.Inputpw, { children: " Password " })) : ((0, jsx_runtime_1.jsx)("span", {}));
    const Inputpwagian = formType === 'signup' ? ((0, jsx_runtime_1.jsx)(inputpw_1.Inputpw, { children: " Confirm password again " })) : ((0, jsx_runtime_1.jsx)("span", {}));
    const titlecard = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : formType === 'resetpw' ? 'Reset password' : (0, jsx_runtime_1.jsx)("span", {});
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(form_card_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("a", { href: "https://hankchenv.com", children: "Home" }), children, (0, jsx_runtime_1.jsxs)("h1", { children: [" ", titlecard] }), linkheader, (0, jsx_runtime_1.jsx)("span", { className: form_card_module_scss_1.default.handpoint, children: linksign }), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, {}), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, { children: (0, jsx_runtime_1.jsx)(input_1.Input, {}) }), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, {}), Inputpwsign, (0, jsx_runtime_1.jsx)("span", { className: form_card_module_scss_1.default.handpoint, children: linkresetpw }), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, {}), Inputpwagian, (0, jsx_runtime_1.jsx)(form_row_1.FormRow, {}), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, { children: (0, jsx_runtime_1.jsxs)(button_1.Button, { children: [" ", titlecard, " "] }) })] }));
};
exports.FormCard = FormCard;
