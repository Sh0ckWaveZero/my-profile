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

# Copy the built files from the builder image to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port the application will run on
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]