FROM node:18-alpine AS frontend-build

WORKDIR /app

COPY ./ProjectVite01/package.json ./ProjectVite01/package-lock.json* ./

RUN npm install

COPY ./ProjectVite01/. ./

RUN npm run build

FROM nginx:alpine AS frontend-prod

COPY --from=frontend-build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
