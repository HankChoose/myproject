import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',              // 必须是 0.0.0.0 才能接受外部访问
    port: 3000,
    allowedHosts: [
      'hankchenv.com',            // 允许自定义域名访问
      'www.hankchenv.com',        // 可选：加上 www 子域
    ],
  },
});
