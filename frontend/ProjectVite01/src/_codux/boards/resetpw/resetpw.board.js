"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const resetpw_1 = require("../../../components/resetpw/resetpw");
exports.default = (0, react_board_1.createBoard)({
    name: 'Resetpw',
    Board: () => <resetpw_1.Resetpw />,
    isSnippet: true,
});
