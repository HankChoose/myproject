"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_4_1 = require("../../../components/test-4/test-4");
exports.default = (0, react_board_1.createBoard)({
    name: 'Test4',
    Board: () => <test_4_1.Test4 />,
    isSnippet: true,
});
