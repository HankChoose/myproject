"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const inputpw_1 = require("../../../components/inputpw/inputpw");
exports.default = (0, react_board_1.createBoard)({
    name: 'Inputpw',
    Board: () => <inputpw_1.Inputpw />,
    isSnippet: true,
});
