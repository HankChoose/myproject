"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_upload_1 = require("../../../components/test-upload/test-upload");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestUpload',
    Board: () => <test_upload_1.TestUpload />,
    isSnippet: true,
});
