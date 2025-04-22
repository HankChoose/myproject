"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_formik_yup_3_1 = require("../../../components/test-formik-yup-3/test-formik-yup-3");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestFormikYup3',
    Board: () => <test_formik_yup_3_1.TestFormikYup3 />,
    isSnippet: true,
});
