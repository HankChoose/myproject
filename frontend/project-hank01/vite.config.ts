import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: '0.0.0.0', // 允许外部访问
        port: 3000,      // 选择一个可供外部访问的端口
    },
    css: {
    preprocessorOptions: {
        scss: {
            additionalData: '@import "@/styles/variables.scss";', // 导入全局变量
            outputStyle: 'expanded', // 输出样式格式，可选值有 'expanded'、'compressed' 等
        },
    },
    },
});
