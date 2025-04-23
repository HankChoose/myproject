"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_link_module_scss_1 = __importDefault(require("./test-link.module.scss"));
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestLink = ({ className }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_link_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/signin", children: " signin " }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/userapply", children: " userapply " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/userprofile", children: " userprofile " })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/checkemail", children: " checkemail " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/checkemail2", children: " checkemail2 " })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testaxiospost", children: " testaxiospost " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testaxiospost2", children: " testaxiospost2 " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testaxiospost3", children: "testaxiospost3 " })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testtoken", children: " testtoken " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testlist", children: " testlist " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testnavigate", children: " testnavigate " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testchangepw", children: " testchangepw " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testrequest", children: " testrequest " })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testupload", children: " testupload " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testgetimages", children: " testgetimages " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testgetimages2", children: " testgetimages2 " }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/testgetimagesarrays", children: " testgetimagesarrays " })] })] });
};
exports.TestLink = TestLink;
