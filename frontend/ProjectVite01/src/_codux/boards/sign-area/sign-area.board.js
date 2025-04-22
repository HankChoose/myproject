"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const sign_area_1 = require("../../../components/sign-area/sign-area");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'SignArea',
    Board: () => <react_router_dom_1.BrowserRouter><sign_area_1.SignArea /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
