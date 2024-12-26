# Use a multi-stage build for smaller image size and better performance
# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the built app using a lightweight web server (Nginx)
FROM nginx:alpine

# Copy the build folder from the build stage to the Nginx server's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow access to the app
EXPOSE 80

# Run the Nginx web server
CMD ["nginx", "-g", "daemon off;"]

