"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_bootstrap_1 = require("../../../components/test-bootstrap/test-bootstrap");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestBootstrap',
    Board: () => (0, jsx_runtime_1.jsx)(test_bootstrap_1.TestBootstrap, {}),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 5
    }
});
