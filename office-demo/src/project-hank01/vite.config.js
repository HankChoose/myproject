"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { defineConfig } = require("vite");
const react = __importDefault(require("@vitejs/plugin-react"));
const svgr = __importDefault(require("vite-plugin-svgr"));

// https://vitejs.dev/config/
module.exports = defineConfig({
    plugins: [react.default(), svgr.default()],
    server: {
        host: '0.0.0.0', // 接受所有外部访问
        port: 3000,
        allowedHosts: [
            'hankchenv.com',
            'www.hankchenv.com'
        ],
    },
});
