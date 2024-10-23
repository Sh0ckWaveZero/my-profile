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
FROM oven/bun

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files from the builder image to the final image
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lockb ./bun.lockb

# Expose the port the application will run on
EXPOSE 3000

# Start the Bun server
CMD ["bun", "run", "preview"]