import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: '0.0.0.0', // 允许外部访问
        port: 3000,      // 选择一个可供外部访问的端口
        proxy: {
            '/api': 'https://localhost:8000', // 将/api请求代理到Django后端
        },
    },
   
});
