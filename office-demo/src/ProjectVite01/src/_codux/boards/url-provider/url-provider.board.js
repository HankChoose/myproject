"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const url_provider_1 = require("../../../components/url-provider/url-provider");
exports.default = (0, react_board_1.createBoard)({
    name: 'UrlProvider',
    Board: () => (0, jsx_runtime_1.jsx)(url_provider_1.UrlProvider, {}),
    isSnippet: true,
});
