FROM node:20.12-alpine as builder

WORKDIR /app
COPY source/ ./
RUN npm install
RUN npm run build

FROM nginx:1.21.0

WORKDIR /usr/share/nginx/html/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html/dist
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
