import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(), // 启用 React 插件来处理 JSX 和 TSX 文件
    svgr(),  // 如果你需要处理 SVG 文件，也可以启用这个插件
  ],
  esbuild: {
    loader: { '.js': 'jsx' }, // 确保 .js 文件支持 JSX
  },
});
