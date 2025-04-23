"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const page_2_1 = require("../../../components/page-2/page-2");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'Page2',
    Board: () => (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(page_2_1.Page2, {}) }),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 36,
        canvasWidth: 40
    }
});
