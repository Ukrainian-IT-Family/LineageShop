# build stage
FROM node:12-slim as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -la

# production-stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
