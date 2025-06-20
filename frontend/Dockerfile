# 1. 使用官方 Node 镜像做构建环境
FROM node:18-alpine AS frontend-build

WORKDIR /app

# 复制 package.json 和 lock 文件（如果有）
COPY package.json package-lock.json* ./

# 安装依赖
RUN npm install

# 复制全部前端源代码
COPY . .
# 构建生产版本
RUN npm run build

# 2. 生产镜像，用轻量级 nginx 仅用于发布静态文件
FROM nginx:alpine AS frontend-prod

# 拷贝构建好的静态文件到 nginx 静态目录
COPY --from=frontend-build /app/dist /usr/share/nginx/html

# 拷贝自定义 nginx 配置（如果有）
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
