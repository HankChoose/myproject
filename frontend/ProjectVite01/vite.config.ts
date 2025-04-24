import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true,     // 允许从外部访问，比如远程服务器IP或域名
    port: 3000,     // 自定义端口为 3000
	allowedHosts: ['localhost', 'zhiyouyuec.com'],
	base: '/react',
  },
});