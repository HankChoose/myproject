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
RUN npm install ws
RUN npm install websocket

# 构建React应用
RUN npm run build
# 启动React应用
CMD ["npm", "start"]


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
RUN npm install ws
RUN npm install websocket
# 启动React应用
CMD ["npm", "start"]


FROM node:latest  as wabpack-codux
# 设置工作目录
WORKDIR /app
COPY ./ProjectVite01/package*.json /app/
# 复制项目代码到容器中
COPY ./ProjectVite01/ /app/
# 安装项目依赖
RUN npm install
RUN npm install react-router-dom
RUN npm install axios
RUN npm install react-bootstrap bootstrap
RUN npm install js-cookie
RUN npm install ws
RUN npm install websocket
RUN npm install --save-dev typescript ts-loader webpack webpack-cli
RUN npm install -g webpack@5
RUN npm install --save-dev webpack@5 webpack-cli@4 webpack-dev-server@4
RUN npm install style-loader css-loader sass-loader node-sass --save-dev
RUN npm install redux react-redux
RUN npm install formik yup
RUN npm install react-table
RUN npm install --save-dev @types/react-table

# 构建React应用
RUN npm run build
# 启动React应用
CMD ["npm", "start"]



FROM node:latest  as vite-codux
# 设置工作目录
WORKDIR /app
COPY ./ProjectVite01/package*.json /app/
# 复制项目代码到容器中
COPY ./ProjectVite01/ /app/
# 安装项目依赖
RUN npm install
RUN npm update
RUN npm install react-router-dom
RUN npm install axios
RUN npm install react-bootstrap bootstrap
RUN npm install js-cookie
RUN npm install ws
RUN npm install websocket
RUN npm install vite sass
#RUN npm update sass
RUN npm install vite-plugin-sass
RUN npm install vite-plugin-svgr --save-dev
RUN npm install --save-dev @types/js-cookie
RUN npm install --save font-awesome
RUN npm install bootstrap@4.5.3
RUN npm install react-icons --save
RUN npm install @react-icons/all-files --save
RUN npm install -g npm
RUN npm install @babel/core @babel/preset-react
RUN npm install react-refresh --save-dev
RUN npm install redux react-redux
RUN npm install formik yup
RUN npm install react-table
RUN npm install --save-dev @types/react-table

# 构建React应用
RUN npm run build
# 启动React应用
CMD ["npm", "start"]
