"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_get_images_2_1 = require("../../../components/test-get-images-2/test-get-images-2");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestGetImages2',
    Board: () => <test_get_images_2_1.TestGetImages2 />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 624
    }
});
