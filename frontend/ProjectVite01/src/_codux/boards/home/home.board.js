"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const home_1 = require("../../../components/home/home");
exports.default = (0, react_board_1.createBoard)({
    name: 'Home',
    Board: () => <home_1.Home />,
    isSnippet: true,
});
