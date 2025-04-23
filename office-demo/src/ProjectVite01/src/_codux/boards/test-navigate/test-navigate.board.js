"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_navigate_1 = require("../../../components/test-navigate/test-navigate");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestNavigate',
    Board: () => (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [" ", (0, jsx_runtime_1.jsx)(test_navigate_1.TestNavigate, {})] }),
    isSnippet: true,
});
