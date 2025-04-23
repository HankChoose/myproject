"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const contact_us_1 = require("../../../components/contact-us/contact-us");
exports.default = (0, react_board_1.createBoard)({
    name: 'ContactUs',
    Board: () => (0, jsx_runtime_1.jsx)(contact_us_1.ContactUs, {}),
    isSnippet: true,
});
