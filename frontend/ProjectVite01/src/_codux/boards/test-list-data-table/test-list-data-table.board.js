"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_list_data_table_1 = require("../../../components/test-list-data-table/test-list-data-table");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestListDataTable',
    Board: () => <react_router_dom_1.BrowserRouter> <test_list_data_table_1.TestListDataTable /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
