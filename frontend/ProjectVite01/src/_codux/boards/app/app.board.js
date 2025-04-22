"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const App_1 = __importDefault(require("../../../App"));
exports.default = (0, react_board_1.createBoard)({
    name: 'App',
    Board: () => <App_1.default />,
    environmentProps: {
        windowWidth: 1144,
        canvasHeight: 973,
        windowHeight: 529,
        canvasWidth: 1142
    }
});
