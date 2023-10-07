# 使用Node.js Docker镜像作为基础镜像
FROM node:latest  as build-stage

# 创建并激活一个虚拟环境
RUN python -m venv /venv

# 指定虚拟环境中的 Python 解释器和工作目录
ENV PATH="/venv/bin:$PATH"
WORKDIR /app

# 复制项目代码到容器中
COPY ./react_app/package*.json /app/
COPY ./react_app/ /app/
# 将依赖文件（requirements.txt）拷贝到容器中
COPY requirements.txt /app/

# 在虚拟环境中升级 pip 到最新版本
RUN pip install --upgrade pip
RUN apt-get update && apt-get install -y python3-pip
RUN pip install websocket-client

# 在虚拟环境中安装依赖项
RUN pip install --no-cache-dir -r requirements.txt

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
RUN apt-get update && apt-get install -y python3-pip
RUN npm install ws
RUN npm install websocket
RUN pip install websocket-client
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
RUN apt-get update && apt-get install -y python3-pip
RUN npm install ws
RUN npm install websocket
RUN pip install websocket-client
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
RUN apt-get update && apt-get install -y python3-pip
RUN npm install ws
RUN npm install websocket
RUN pip install websocket-client
RUN npm install --save-dev typescript ts-loader webpack webpack-cli


# 构建React应用
RUN npm run build
# 启动React应用
CMD ["npm", "start"]
