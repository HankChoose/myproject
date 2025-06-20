import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: ['zhiyouyuec.com'],
    origin: 'https://zhiyouyuec.com', // 强制匹配 nginx 请求头
    base: '/react/', // 很关键！用于修正资源路径前缀（尤其是 WebSocket 路径）
    hmr: {
      path: '/react/@vite/hmr', // 修正 HMR WS 路径，防止加载失败
    },
  },
  base: '/react/', // 重要：构建和开发路径一致
});
