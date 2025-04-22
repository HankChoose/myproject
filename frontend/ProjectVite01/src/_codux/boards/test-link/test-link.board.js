"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_link_1 = require("../../../components/test-link/test-link");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestLink',
    Board: () => <react_router_dom_1.BrowserRouter><test_link_1.TestLink /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
