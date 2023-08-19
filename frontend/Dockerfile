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
#COPY ./react_app/ /app/
# 安装项目依赖
RUN npm install
RUN npm install react-router-dom
RUN npm install axios
RUN npm install react-bootstrap bootstrap
RUN npm install js-cookie
# 启动React应用
CMD ["npm", "start"]
