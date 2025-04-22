"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const contact_us_1 = require("../../../components/contact-us/contact-us");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'ContactUs',
    Board: () => <react_router_dom_1.BrowserRouter><contact_us_1.ContactUs /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
});
