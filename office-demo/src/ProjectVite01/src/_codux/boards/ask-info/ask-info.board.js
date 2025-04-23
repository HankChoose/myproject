"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const ask_info_1 = require("../../../components/ask-info/ask-info");
const AuthContext_1 = require("../../../AuthContext");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'AskInfo',
    Board: () => (0, jsx_runtime_1.jsx)(AuthContext_1.AuthProvider, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [" ", (0, jsx_runtime_1.jsx)(ask_info_1.AskInfo, {})] }) }),
    isSnippet: true,
});
