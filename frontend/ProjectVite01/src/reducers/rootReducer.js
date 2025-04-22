"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// rootReducer.js
const redux_1 = require("redux");
const userInfoReducer_1 = __importDefault(require("./userInfoReducer"));
const userInfo2Reducer_1 = __importDefault(require("./userInfo2Reducer"));
const rootReducer = (0, redux_1.combineReducers)({
    userInfo: userInfoReducer_1.default,
    userInfo2: userInfo2Reducer_1.default,
});
exports.default = rootReducer;
