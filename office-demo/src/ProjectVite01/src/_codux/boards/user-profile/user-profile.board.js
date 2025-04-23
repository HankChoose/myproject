"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const user_profile_1 = require("../../../components/user-profile/user-profile");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'UserProfile',
    Board: () => (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [" ", (0, jsx_runtime_1.jsx)(user_profile_1.UserProfile, {})] }),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 5,
        windowHeight: 598
    }
});
