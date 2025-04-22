"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_axios_post_1 = require("../../../components/test-axios-post/test-axios-post");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestAxiosPost',
    Board: () => <react_router_dom_1.BrowserRouter> <test_axios_post_1.TestAxiosPost /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
