"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_upload_1 = require("../../../components/test-upload/test-upload");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestUpload',
    Board: () => (0, jsx_runtime_1.jsx)(test_upload_1.TestUpload, {}),
    isSnippet: true,
});
