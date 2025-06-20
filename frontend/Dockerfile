# 构建阶段
FROM node:18-alpine AS frontend-build

WORKDIR /app

# 复制依赖描述文件
COPY package.json package-lock.json* ./

RUN npm install

# 复制所有前端代码
COPY . .

RUN npm run build

# 生产镜像
FROM nginx:alpine AS frontend-prod

# 复制构建产物到 nginx 静态目录
COPY --from=frontend-build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
