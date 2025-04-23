"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_axios_post_2_1 = require("../../../components/test-axios-post-2/test-axios-post-2");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestAxiosPost2',
    Board: () => (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: ["  ", (0, jsx_runtime_1.jsx)(test_axios_post_2_1.TestAxiosPost2, {})] }),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 5
    }
});
