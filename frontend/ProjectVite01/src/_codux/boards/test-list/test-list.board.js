"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_list_1 = require("../../../components/test-list/test-list");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestList',
    Board: () => <react_router_dom_1.BrowserRouter>  <test_list_1.TestList /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
