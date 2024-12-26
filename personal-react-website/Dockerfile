# Build Stage
FROM node:18 AS build

ARG VITE_GITHUB_TOKEN
ENV VITE_GITHUB_TOKEN=${VITE_GITHUB_TOKEN}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Nginx Stage
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
