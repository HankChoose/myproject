"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPosition = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_position_module_scss_1 = __importDefault(require("./test-position.module.scss"));
const sign_card_1 = require("../sign-card/sign-card");
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestPosition = ({ className }) => {
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_position_module_scss_1.default.root, className), children: ["Root", (0, jsx_runtime_1.jsx)("div", { className: test_position_module_scss_1.default.top, children: "AppTop" }), (0, jsx_runtime_1.jsxs)("div", { className: test_position_module_scss_1.default.content, children: ["App", (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [" ", (0, jsx_runtime_1.jsx)(sign_card_1.SignCard, {})] })] })] });
};
exports.TestPosition = TestPosition;
