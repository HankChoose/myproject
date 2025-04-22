"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const header_1 = require("../../../header");
exports.default = (0, react_board_1.createBoard)({
    name: 'Header',
    Board: () => <header_1.Header />
});
