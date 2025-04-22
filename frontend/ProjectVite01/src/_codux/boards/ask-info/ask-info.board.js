"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const ask_info_1 = require("../../../components/ask-info/ask-info");
const AuthContext_1 = require("../../../AuthContext");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'AskInfo',
    Board: () => <AuthContext_1.AuthProvider><react_router_dom_1.BrowserRouter> <ask_info_1.AskInfo /></react_router_dom_1.BrowserRouter></AuthContext_1.AuthProvider>,
    isSnippet: true,
});
