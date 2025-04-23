"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const from_row_right_1 = require("../../../components/from-row-right/from-row-right");
exports.default = (0, react_board_1.createBoard)({
    name: 'FromRowRight',
    Board: () => (0, jsx_runtime_1.jsx)(from_row_right_1.FromRowRight, {}),
    isSnippet: true,
});
