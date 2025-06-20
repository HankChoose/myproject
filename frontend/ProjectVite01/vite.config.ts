import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: ['zhiyouyuec.com'],
    origin: 'https://zhiyouyuec.com',
    // 如果部署在根路径，就不需要设置 base 和 hmr.path
  },
  base: '/', // ✅ 重要：部署在根路径就写 /
});
