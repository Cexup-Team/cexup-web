FROM nginx:1.16.0-alpine
WORKDIR /app
COPY  ./result /usr/share/nginx/html
COPY ./assets /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]