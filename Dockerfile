FROM nginx:mainline-alpine
RUN rm /etc/nginx/conf.d/*
ADD default.conf /etc/nginx/conf.d/
COPY ./build /usr/share/nginx/html
