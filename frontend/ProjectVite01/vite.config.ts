import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  esbuild: {
    loader: 'jsx',                // 👈 告诉 Vite 用 JSX 方式加载
    include: /src\/.*\.js$/,      // 👈 仅针对 src 下的 .js 文件
  },
});
