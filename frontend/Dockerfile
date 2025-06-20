# 1. 构建阶段：构建 React 项目
FROM node:18-alpine AS frontend-build

WORKDIR /app

# 拷贝 package 文件安装依赖
COPY ./package.json ./package-lock.json* ./

RUN npm install

# 再拷贝完整源代码（包括 index.html、vite.config.js、src/）
COPY . .

# 构建 vite 应用
RUN npm run build

# 2. 生产阶段：仅发布静态资源
FROM nginx:alpine AS frontend-prod

# 拷贝构建产物到 nginx 静态目录
COPY --from=frontend-build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
