FROM node:18-slim

# 安装 Puppeteer 和 Chromium 所需依赖 + chromium 浏览器
RUN apt-get update && apt-get install -y \
	chromium \
	wget \
	ca-certificates \
	fonts-liberation \
	libappindicator3-1 \
	libasound2 \
	libatk-bridge2.0-0 \
	libatk1.0-0 \
	libcups2 \
	libdbus-1-3 \
	libgdk-pixbuf2.0-0 \
	libnspr4 \
	libnss3 \
	libx11-xcb1 \
	libxcomposite1 \
	libxdamage1 \
	libxrandr2 \
	xdg-utils \
	--no-install-recommends && \
	apt-get clean && rm -rf /var/lib/apt/lists/*

# 告诉 Puppeteer 用系统安装的 Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# 🚀 关键行：提高 Node 可用内存到 4GB
ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]
