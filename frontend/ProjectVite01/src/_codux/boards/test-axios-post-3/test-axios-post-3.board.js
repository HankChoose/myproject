"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_axios_post_3_1 = require("../../../components/test-axios-post-3/test-axios-post-3");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestAxiosPost3',
    Board: () => <react_router_dom_1.BrowserRouter> <test_axios_post_3_1.TestAxiosPost3 /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
