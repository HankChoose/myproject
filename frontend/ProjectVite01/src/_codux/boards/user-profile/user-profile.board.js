"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const user_profile_1 = require("../../../components/user-profile/user-profile");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'UserProfile',
    Board: () => <react_router_dom_1.BrowserRouter> <user_profile_1.UserProfile /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 5,
        windowHeight: 598
    }
});
