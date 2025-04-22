"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const button_1 = require("../../../components/button/button");
exports.default = (0, react_board_1.createBoard)({
    name: 'Button',
    Board: () => <button_1.Button />,
    isSnippet: true,
});
