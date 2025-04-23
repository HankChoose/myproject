"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page1 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const page_1_module_scss_1 = __importDefault(require("./page-1.module.scss"));
const react_router_dom_1 = require("react-router-dom");
const Page1 = ({ className }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(page_1_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("h1", { children: "Component-page1" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/page1/test1", children: "Test1" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/page1/test2", children: "Test2" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] });
};
exports.Page1 = Page1;
