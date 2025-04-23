"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const input_1 = require("../../../components/input/input");
exports.default = (0, react_board_1.createBoard)({
    name: 'Input',
    Board: () => (0, jsx_runtime_1.jsx)(input_1.Input, {}),
    isSnippet: true,
});
