"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const AuthContext_1 = require("../../../AuthContext");
const top_bar_1 = require("../../../components/top-bar/top-bar");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TopBar',
    Board: () => <AuthContext_1.AuthProvider> <react_router_dom_1.BrowserRouter><top_bar_1.TopBar /></react_router_dom_1.BrowserRouter></AuthContext_1.AuthProvider>,
    isSnippet: true,
});
