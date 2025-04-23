"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const user_post_list_1 = require("../../../components/user-post-list/user-post-list");
exports.default = (0, react_board_1.createBoard)({
    name: 'UserPostList',
    Board: () => (0, jsx_runtime_1.jsx)(user_post_list_1.UserPostList, {}),
    isSnippet: true,
});
