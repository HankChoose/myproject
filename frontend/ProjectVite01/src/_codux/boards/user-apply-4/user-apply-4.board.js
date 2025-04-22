"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const user_apply_4_1 = require("../../../components/user-apply-4/user-apply-4");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'UserApply4',
    Board: () => <react_router_dom_1.BrowserRouter> <user_apply_4_1.UserApply4 /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
