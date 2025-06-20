# 阶段 1：构建
FROM node:18-alpine AS frontend-build

WORKDIR /app

# 拷贝 frontend/ 下的 package 文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝完整项目（含 ProjectVite01 子目录）
COPY . .

# 切换到子目录并构建
WORKDIR /app/ProjectVite01

RUN npm run build

# 阶段 2：部署构建产物
FROM nginx:alpine AS frontend-prod

COPY --from=frontend-build /app/ProjectVite01/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
