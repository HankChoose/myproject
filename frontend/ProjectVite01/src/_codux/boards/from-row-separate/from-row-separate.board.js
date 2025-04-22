"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const from_row_separate_1 = require("../../../components/from-row-separate/from-row-separate");
exports.default = (0, react_board_1.createBoard)({
    name: 'FromRowSeparate',
    Board: () => <from_row_separate_1.FromRowSeparate />,
    isSnippet: true,
});
