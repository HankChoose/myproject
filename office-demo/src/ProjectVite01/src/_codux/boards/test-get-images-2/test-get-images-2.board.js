"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_get_images_2_1 = require("../../../components/test-get-images-2/test-get-images-2");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestGetImages2',
    Board: () => (0, jsx_runtime_1.jsx)(test_get_images_2_1.TestGetImages2, {}),
    isSnippet: true,
    environmentProps: {
        windowHeight: 624
    }
});
