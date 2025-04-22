"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_2_1 = require("../../../components/test-2/test-2");
exports.default = (0, react_board_1.createBoard)({
    name: 'Test2',
    Board: () => <test_2_1.Test2 />,
    isSnippet: true,
});
