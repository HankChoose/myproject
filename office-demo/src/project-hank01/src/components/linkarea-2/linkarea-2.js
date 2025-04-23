"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkarea2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const linkarea_2_module_scss_1 = __importDefault(require("./linkarea-2.module.scss"));
const form_card_1 = require("../form-card/form-card");
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Linkarea2 = ({ className }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(linkarea_2_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/*", children: "Sign In" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signup", children: "Sign Up" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/resetpw", children: "Reset password" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/*", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signin" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signup" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signin" }) })] })] }) }) }));
};
exports.Linkarea2 = Linkarea2;
