import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import fs from 'fs'
import path from 'path'

// HTTPS 证书路径（可选，本地开发自签证书）
const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, 'certs/localhost-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'certs/localhost.pem')),
}

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',            // 监听所有网络接口
    port: 3000,                  // 自定义端口
    https: httpsOptions,         // 启用 HTTPS，可选
    allowedHosts: [
      'hankchenv.com',           // 自定义域名
      'localhost',               // 本机访问
      '127.0.0.1',
      '[::1]',
    ],
    strictPort: true,            // 端口占用则报错
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    https: httpsOptions,
  },
})
