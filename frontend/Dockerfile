# 使用Node.js Docker镜像作为基础镜像
FROM node:latest  as build-stage
# 设置工作目录
WORKDIR /app
COPY ./react_app/package*.json /app/
# 复制项目代码到容器中
COPY ./react_app/ /app/
# 安装项目依赖
RUN npm install
RUN npm install react-router-dom
RUN npm install axios
RUN npm install react-bootstrap bootstrap
RUN npm install js-cookie
# 构建React应用
RUN npm run build
# 启动React应用
CMD ["npm", "start"]

# production stage
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

#FROM node:lts-alpine as production-stage
FROM node:latest  as production-stage
# 设置工作目录
WORKDIR /app

COPY ./react_app/package*.json /app/
# 复制项目代码到容器中
COPY ./react_app/ /app/
# 安装项目依赖
RUN npm install
RUN npm install react-router-dom
RUN npm install axios
RUN npm install react-bootstrap bootstrap
RUN npm install js-cookie
# 启动React应用
CMD ["npm", "start"]


FROM node:latest  as wabpack-codux
# 设置工作目录
WORKDIR /app
COPY ./project-hank02/package*.json /app/
# 复制项目代码到容器中
COPY ./project-hank02/ /app/
# 安装项目依赖
RUN npm install
RUN npm install react-router-dom
RUN npm install axios
RUN npm install react-bootstrap bootstrap
RUN npm install js-cookie
RUN npm install --save-dev typescript ts-loader webpack webpack-cli
RUN npm install -g webpack@5
RUN npm install --save-dev webpack@5 webpack-cli@4 webpack-dev-server@4

# 构建React应用
RUN npm run build
# 启动React应用
CMD ["npm", "start"]



FROM node:latest  as vite-codux
# 设置工作目录
WORKDIR /app
COPY ./project-hank01/package*.json /app/
# 复制项目代码到容器中
COPY ./project-hank01/ /app/
# 安装项目依赖
RUN npm install
RUN npm install react-router-dom
RUN npm install axios
RUN npm install react-bootstrap bootstrap
RUN npm install js-cookie
RUN npm install --save-dev typescript ts-loader webpack webpack-cli
RUN npm install ws

# 构建React应用
RUN npm run build
# 启动React应用
CMD ["npm", "start"]
