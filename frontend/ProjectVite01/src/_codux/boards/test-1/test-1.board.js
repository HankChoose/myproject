"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_1_1 = require("../../../components/test-1/test-1");
exports.default = (0, react_board_1.createBoard)({
    name: 'Test1',
    Board: () => <test_1_1.Test1 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 42
    }
});
