"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const sign_card_1 = require("../../../components/sign-card/sign-card");
const AuthContext_1 = require("../../../AuthContext");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'SignUp',
    Board: () => <AuthContext_1.AuthProvider><react_router_dom_1.BrowserRouter> <sign_card_1.SignCard formType="signup"/></react_router_dom_1.BrowserRouter></AuthContext_1.AuthProvider>,
    isSnippet: true,
    environmentProps: {
        windowHeight: 635
    }
});
