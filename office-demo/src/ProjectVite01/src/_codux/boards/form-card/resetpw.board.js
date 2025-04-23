"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const form_card_1 = require("../../../components/form-card/form-card");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'Resetpw',
    Board: () => (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "resetpw" }) }),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 370
    }
});
