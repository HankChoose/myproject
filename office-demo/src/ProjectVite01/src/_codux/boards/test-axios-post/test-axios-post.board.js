"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_axios_post_1 = require("../../../components/test-axios-post/test-axios-post");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestAxiosPost',
    Board: () => (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [" ", (0, jsx_runtime_1.jsx)(test_axios_post_1.TestAxiosPost, {})] }),
    isSnippet: true,
});
