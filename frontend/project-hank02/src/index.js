"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
require("./globals.st.css");
const app_1 = require("./app");
(0, client_1.createRoot)(document.body.appendChild(document.createElement('div'))).render(<react_1.default.StrictMode>
        <app_1.App />
    </react_1.default.StrictMode>);
