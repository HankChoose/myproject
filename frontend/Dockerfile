FROM node:18-alpine AS frontend-build

WORKDIR /app

# 先复制 package.json 和 lock 文件（顶层的）
COPY package.json package-lock.json* ./

RUN npm install

# 复制子目录源码到 /app/ProjectVite01
COPY ProjectVite01 ./ProjectVite01

# 切换工作目录到项目源码根目录
WORKDIR /app/ProjectVite01

RUN npm run build

FROM nginx:alpine AS frontend-prod

COPY --from=frontend-build /app/ProjectVite01/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
