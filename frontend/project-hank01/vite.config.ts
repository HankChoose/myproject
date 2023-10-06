import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: '0.0.0.0', // 允许外部访问
        port: 3000, // 自定义端口号
        proxy: {
            '/ws': {
              target: 'ws://localhost:3000', // WebSocket服务器的地址和端口
              changeOrigin: true,
              ws: true,
            },
        }
    }

});
