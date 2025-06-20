# 阶段 1：构建
FROM node:18-alpine AS frontend-build

WORKDIR /app

# 拷贝 package.json 和 lock 文件（注意路径变了）
COPY ProjectVite01/package*.json ./ProjectVite01/

# 安装依赖
WORKDIR /app/ProjectVite01
RUN npm install

# 回到 /app 复制完整代码
WORKDIR /app
COPY . .

# 再回到子目录构建
WORKDIR /app/ProjectVite01
RUN npm run build

# 阶段 2：部署构建产物
FROM nginx:alpine AS frontend-prod

COPY --from=frontend-build /app/ProjectVite01/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
