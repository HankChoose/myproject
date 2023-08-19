# 使用Node.js Docker镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制项目代码到容器中
COPY . /app/

# 安装项目依赖
RUN npm install

# 构建React应用
RUN npm run build

# 启动React应用
CMD ["npm", "start"]
