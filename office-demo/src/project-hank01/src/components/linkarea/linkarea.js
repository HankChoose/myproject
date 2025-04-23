"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkarea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const linkarea_module_scss_1 = __importDefault(require("./linkarea.module.scss"));
const form_card_1 = require("../../components/form-card/form-card");
const react_router_dom_1 = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Linkarea = ({ className }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(linkarea_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsx)("div", { className: "nav nav-tabs", id: "nav-tab", role: "tablist", children: (0, jsx_runtime_1.jsxs)("ul", { className: "nav nav-tabs", id: "myTab", role: "tablist", children: [(0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/*", className: "nav-link active", "data-toggle": "tab", children: "Sign In" }) }), (0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signup", className: "nav-link", "data-toggle": "tab", children: "Sign Up" }) })] }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "tab-content", id: "nav-tabContent", children: [(0, jsx_runtime_1.jsx)("div", { className: "tab-pane fade show active", role: "tabpanel", "aria-labelledby": "nav-home-tab" }), (0, jsx_runtime_1.jsx)("div", { className: "tab-pane fade", role: "tabpanel", "aria-labelledby": "nav-profile-tab" })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/*", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signin" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signup" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signin" }) })] })] }) }) }));
};
exports.Linkarea = Linkarea;
