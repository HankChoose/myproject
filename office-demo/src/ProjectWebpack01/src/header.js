"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const header_st_css_1 = require("./header.st.css");
const stylable_svg_1 = __importDefault(require("./assets/stylable.svg"));
const Header = ({ className }) => {
    return ((0, jsx_runtime_1.jsx)("header", { className: (0, header_st_css_1.st)(header_st_css_1.classes.root, className), children: (0, jsx_runtime_1.jsxs)("h1", { className: header_st_css_1.classes.title, children: ["Hello", ' ', (0, jsx_runtime_1.jsx)("a", { className: header_st_css_1.classes.anchor, href: "https://stylable.io", target: "_blank", rel: "noopener noreferrer", children: "Stylable!" }), ' ', (0, jsx_runtime_1.jsx)("img", { className: header_st_css_1.classes.icon, src: stylable_svg_1.default, width: 50, height: 50, alt: "" })] }) }));
};
exports.Header = Header;
