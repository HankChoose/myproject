"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const page_1_1 = require("../../../components/page-1/page-1");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'Page1',
    Board: () => (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(page_1_1.Page1, {}), " "] }),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024
    }
});
