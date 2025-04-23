"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_list_class_1 = __importDefault(require("../../../components/test-list-class/test-list-class"));
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestListClass',
    Board: () => (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: ["  ", (0, jsx_runtime_1.jsx)(test_list_class_1.default, {})] }),
    isSnippet: true,
});
