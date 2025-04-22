"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_formik_yup_2_1 = require("../../../components/test-formik-yup-2/test-formik-yup-2");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestFormikYup2',
    Board: () => <react_router_dom_1.BrowserRouter><test_formik_yup_2_1.TestFormikYup2 /> </react_router_dom_1.BrowserRouter>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1152
    }
});
