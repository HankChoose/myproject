"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const home_1 = require("../../../components/home/home");
exports.default = (0, react_board_1.createBoard)({
    name: 'Home',
    Board: () => (0, jsx_runtime_1.jsx)(home_1.Home, {}),
    isSnippet: true,
});
