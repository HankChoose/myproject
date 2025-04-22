import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

eexport default defineConfig({
  plugins: [react(), svgr()],
  esbuild: {
    loader: { '.js': 'jsx' }, // 全局开启 `.js` 的 JSX 支持
  },
});
