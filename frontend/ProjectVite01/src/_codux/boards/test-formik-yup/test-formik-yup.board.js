"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_formik_yup_1 = require("../../../components/test-formik-yup/test-formik-yup");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestFormikYup',
    Board: () => <test_formik_yup_1.TestFormikYup />,
    isSnippet: true,
});
