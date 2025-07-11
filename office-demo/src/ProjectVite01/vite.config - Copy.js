"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_plugin_svgr_1 = __importDefault(require("vite-plugin-svgr"));
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)(), (0, vite_plugin_svgr_1.default)()],
    server: {
        host: '0.0.0.0', // 允许外部访问
        port: 3000, // 选择一个可供外部访问的端口
    },
});
