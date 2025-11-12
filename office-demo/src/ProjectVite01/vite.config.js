const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const svgr = require('vite-plugin-svgr')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['hankchenv.com', 'www.hankchenv.com'],
  },
})
