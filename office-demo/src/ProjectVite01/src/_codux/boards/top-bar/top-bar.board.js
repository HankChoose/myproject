"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const AuthContext_1 = require("../../../AuthContext");
const top_bar_1 = require("../../../components/top-bar/top-bar");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TopBar',
    Board: () => (0, jsx_runtime_1.jsxs)(AuthContext_1.AuthProvider, { children: [" ", (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(top_bar_1.TopBar, {}) })] }),
    isSnippet: true,
});
