"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const label_1 = require("../../../components/label/label");
exports.default = (0, react_board_1.createBoard)({
    name: 'Label',
    Board: () => <label_1.Label>My Label</label_1.Label>,
    isSnippet: true,
});
