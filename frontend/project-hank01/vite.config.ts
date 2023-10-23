import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import ViteSassPlugin from 'vite-plugin-sass'; // 导入Sass插件
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr(), ViteSassPlugin()],
	
});
