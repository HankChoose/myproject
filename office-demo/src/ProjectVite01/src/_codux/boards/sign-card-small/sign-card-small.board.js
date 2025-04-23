"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const sign_card_small_1 = require("../../../components/sign-card-small/sign-card-small");
const AuthContext_1 = require("../../../AuthContext");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'SignCardSmall',
    Board: () => (0, jsx_runtime_1.jsxs)(AuthContext_1.AuthProvider, { children: [" ", (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: ["  ", (0, jsx_runtime_1.jsx)(sign_card_small_1.SignCardSmall, {})] }), " "] }),
    isSnippet: true,
});
