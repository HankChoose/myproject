"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_token_1 = require("../../../components/test-token/test-token");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestToken',
    Board: () => <react_router_dom_1.BrowserRouter><test_token_1.TestToken /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
