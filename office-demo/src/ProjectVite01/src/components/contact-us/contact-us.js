"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const contact_us_module_scss_1 = __importDefault(require("./contact-us.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_bootstrap_1 = require("react-bootstrap");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const ContactUs = ({ className }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(contact_us_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { style: { width: '60vw' }, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Body, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, { children: (0, jsx_runtime_1.jsx)("h1", { children: "Contact Us" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Text, {})] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.ListGroup, { className: "list-group-flush", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup.Item, { children: "Please feel free to contact us if need further information." }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup.Item, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Table, { striped: true, hover: true, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: { width: '150px' }, children: "Itme" }), (0, jsx_runtime_1.jsx)("th", { children: "Content" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Email:" }), (0, jsx_runtime_1.jsx)("td", { children: "hankchenv.@gmail.om" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Email:" }), (0, jsx_runtime_1.jsx)("td", { children: "hankchenv@gmail.om" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Phone:" }), (0, jsx_runtime_1.jsx)("td", { children: "+1 587-936-1806" })] })] })] }) })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Body, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Link, { href: "#" }) })] }) });
};
exports.ContactUs = ContactUs;
