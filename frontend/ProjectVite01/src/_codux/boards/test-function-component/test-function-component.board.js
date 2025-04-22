"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_function_component_1 = require("../../../components/test-function-component/test-function-component");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestFunctionComponent',
    Board: () => <test_function_component_1.TestFunctionComponent name="John" age={30}/>,
    isSnippet: true,
});
