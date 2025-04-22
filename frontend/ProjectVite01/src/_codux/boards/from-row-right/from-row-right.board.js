"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const from_row_right_1 = require("../../../components/from-row-right/from-row-right");
exports.default = (0, react_board_1.createBoard)({
    name: 'FromRowRight',
    Board: () => <from_row_right_1.FromRowRight />,
    isSnippet: true,
});
