# Step 1: Build the application
FROM oven/bun AS builder

# Set the working directory in the container
WORKDIR /app

# Copy all the application files to the container
COPY . .

# Install dependencies and run the build process
RUN bun install
RUN bun run build

# Step 2: Create a smaller image for running the application
FROM nginx:alpine

WORKDIR /usr/share/nginx/

RUN rm -rf html
RUN mkdir html

WORKDIR /

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx

# Copy the built files from the builder image to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Start Nginx server
ENTRYPOINT ["nginx", "-g", "daemon off;"]