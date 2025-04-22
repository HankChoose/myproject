"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const app_1 = require("../../../app");
exports.default = (0, react_board_1.createBoard)({
    name: 'App',
    Board: () => <app_1.App />,
});
