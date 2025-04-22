"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_get_images_1 = require("../../../components/test-get-images/test-get-images");
const imageInfo = '20240110_055037__20210715144321_image_0.jpg';
exports.default = (0, react_board_1.createBoard)({
    name: 'TestGetImages',
    Board: () => <test_get_images_1.TestGetImages imageInfo={imageInfo}/>,
    isSnippet: true,
});
