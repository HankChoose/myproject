"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page1 = void 0;
const classnames_1 = __importDefault(require("classnames"));
const page_1_module_scss_1 = __importDefault(require("./page-1.module.scss"));
const react_router_dom_1 = require("react-router-dom");
const Page1 = ({ className }) => {
    return <div className={(0, classnames_1.default)(page_1_module_scss_1.default.root, className)}>
        <h1>Component-page1</h1>
        <react_router_dom_1.Link to="/react/page1/test1">Test1</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/page1/test2">Test2</react_router_dom_1.Link>
        <react_router_dom_1.Outlet />
    </div>;
};
exports.Page1 = Page1;
