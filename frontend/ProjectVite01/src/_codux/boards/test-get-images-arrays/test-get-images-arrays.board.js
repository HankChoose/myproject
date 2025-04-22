"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_get_images_arrays_1 = require("../../../components/test-get-images-arrays/test-get-images-arrays");
const fileNames = ['20240110_055037_CELPIP1_image_2.jpg', '20240111_030558__20210715144328_image_1.jpg', 'defaultList.png'];
exports.default = (0, react_board_1.createBoard)({
    name: 'TestGetImagesArrays',
    Board: () => <test_get_images_arrays_1.TestGetImagesArrays fileNames={fileNames}/>,
    isSnippet: true,
});
