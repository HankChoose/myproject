"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const page_2_module_scss_1 = __importDefault(require("./page-2.module.scss"));
const react_router_dom_1 = require("react-router-dom");
const Page2 = ({ className }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(page_2_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("h1", { children: "Component-page2" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/page2/test3", children: "Test3" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/page2/test4", children: "Test4" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] });
};
exports.Page2 = Page2;
