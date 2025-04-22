"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page2 = void 0;
const classnames_1 = __importDefault(require("classnames"));
const page_2_module_scss_1 = __importDefault(require("./page-2.module.scss"));
const react_router_dom_1 = require("react-router-dom");
const Page2 = ({ className }) => {
    return <div className={(0, classnames_1.default)(page_2_module_scss_1.default.root, className)}>
        <h1>Component-page2</h1> 
        <react_router_dom_1.Link to="/react/page2/test3">Test3</react_router_dom_1.Link>
        <react_router_dom_1.Link to="/react/page2/test4">Test4</react_router_dom_1.Link>
        <react_router_dom_1.Outlet />
    </div>;
};
exports.Page2 = Page2;
