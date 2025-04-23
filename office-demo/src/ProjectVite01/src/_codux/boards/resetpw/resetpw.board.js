"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const resetpw_1 = require("../../../components/resetpw/resetpw");
exports.default = (0, react_board_1.createBoard)({
    name: 'Resetpw',
    Board: () => (0, jsx_runtime_1.jsx)(resetpw_1.Resetpw, {}),
    isSnippet: true,
});
