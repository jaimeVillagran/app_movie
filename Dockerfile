# Path: app_movie/Dockerfile
FROM mariadb:latest
# Path: app_movie/Dockerfile
ENV MYSQL_ROOT_PASSWORD 123456
# Path: app_movie/Dockerfile
ENV MYSQL_DATABASE app_movie
# Path: app_movie/Dockerfile
ENV MYSQL_USER app_movie
# Path: app_movie/Dockerfile
ENV MYSQL_PASSWORD 123456
# Path: app_movie/Dockerfile
COPY ./app_movie/package.json ./app_movie
# Path: app_movie/Dockerfile
WORKDIR /app_movie
# Path: app_movie/Dockerfile
RUN npm install
# Path: app_movie/Dockerfile
COPY ./app_movie .
# Path: app_movie/Dockerfile
EXPOSE 3000
# Path: app_movie/Dockerfile
CMD ["npm", "run", "dev"]
# Path: app_movie/Dockerfile
# Path: app_movie/Dockerfile
/crear dokerfile node
# Path: app_movie/Dockerfile
FROM node:latest
# Path: app_movie/Dockerfile
WORKDIR /app_movie
# Path: app_movie/Dockerfile
COPY ./app_movie/package.json ./app_movie
# Path: app_movie/Dockerfile
RUN npm install
# Path: app_movie/Dockerfile
COPY ./app_movie .
# Path: app_movie/Dockerfile
EXPOSE 3000
# Path: app_movie/Dockerfile
CMD ["npm", "run", "dev"]
# Path: app_movie/Dockerfile
