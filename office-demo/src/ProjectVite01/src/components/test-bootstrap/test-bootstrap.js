"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBootstrap = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_bootstrap_module_scss_1 = __importDefault(require("./test-bootstrap.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const Table_1 = __importDefault(require("react-bootstrap/Table"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestBootstrap = ({ className }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_bootstrap_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsxs)(Table_1.default, { striped: true, bordered: true, hover: true, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "#" }), (0, jsx_runtime_1.jsx)("th", { children: "First Name" }), (0, jsx_runtime_1.jsx)("th", { children: "Last Name" }), (0, jsx_runtime_1.jsx)("th", { children: "Username" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "1" }), (0, jsx_runtime_1.jsx)("td", { children: "Mark" }), (0, jsx_runtime_1.jsx)("td", { children: "Otto" }), (0, jsx_runtime_1.jsx)("td", { children: "@mdo" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "2" }), (0, jsx_runtime_1.jsx)("td", { children: "Jacob" }), (0, jsx_runtime_1.jsx)("td", { children: "Thornton" }), (0, jsx_runtime_1.jsx)("td", { children: "@fat" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "3" }), (0, jsx_runtime_1.jsx)("td", { colSpan: 2, children: "Larry the Bird" }), (0, jsx_runtime_1.jsx)("td", { children: "@twitter" })] })] })] }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "primary", children: "Primary" }), ' ', (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "secondary", children: "Secondary" }), ' ', (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "success", children: "Success" }), ' ', (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "warning", children: "Warning" }), ' ', (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "danger", children: "Danger" }), ' ', (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "info", children: "Info" }), ' ', (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "light", children: "Light" }), ' ', (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "dark", children: "Dark" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "link", children: "Link" })] });
};
exports.TestBootstrap = TestBootstrap;
