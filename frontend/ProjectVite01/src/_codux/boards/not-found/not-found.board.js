"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const not_found_1 = require("../../../components/not-found/not-found");
exports.default = (0, react_board_1.createBoard)({
    name: 'NotFound',
    Board: () => <not_found_1.NotFound />,
    isSnippet: true,
});
