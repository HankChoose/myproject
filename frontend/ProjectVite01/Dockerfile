# 构建阶段
FROM node:18-alpine AS frontend-build

WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json* ./

RUN npm install

# 复制项目全部文件
COPY . .

# 构建
RUN npm run build

# 生产阶段
FROM nginx:alpine AS frontend-prod

COPY --from=frontend-build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
