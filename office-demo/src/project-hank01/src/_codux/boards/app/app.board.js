"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const App_1 = __importDefault(require("../../../App"));
exports.default = (0, react_board_1.createBoard)({
    name: 'App',
    Board: () => (0, jsx_runtime_1.jsx)(App_1.default, {}),
    environmentProps: {
        canvasBackgroundColor: 'rgba(255, 196, 196, 0)',
        canvasHeight: 608,
        windowHeight: 524,
        windowWidth: 1148,
    },
});
