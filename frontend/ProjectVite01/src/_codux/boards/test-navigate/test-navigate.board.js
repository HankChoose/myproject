"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_navigate_1 = require("../../../components/test-navigate/test-navigate");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestNavigate',
    Board: () => <react_router_dom_1.BrowserRouter> <test_navigate_1.TestNavigate /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
