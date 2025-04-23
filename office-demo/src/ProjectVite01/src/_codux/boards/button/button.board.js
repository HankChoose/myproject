"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const button_1 = require("../../../components/button/button");
exports.default = (0, react_board_1.createBoard)({
    name: 'Button',
    Board: () => (0, jsx_runtime_1.jsx)(button_1.Button, { children: "My Button" }),
    isSnippet: true,
});
