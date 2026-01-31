# Dockerfile for Bun + Next.js on ARM64 (Raspberry Pi)

###################
# BUILD STAGE
###################
FROM oven/bun:1-alpine AS build

WORKDIR /app

# Install build dependencies
RUN apk update && apk add --no-cache --virtual .build-deps \
    curl \
    bash \
    ca-certificates \
    build-base \
    && rm -rf /var/cache/apk/*

# Copy dependency files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy source files
COPY . .

# Build Next.js
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

RUN bun run build

# Cleanup
RUN bun pm cache rm 2>/dev/null || true && \
    rm -rf /root/.cache /tmp/* && \
    rm -rf .next/cache && \
    apk del .build-deps 2>/dev/null || true

###################
# RUNTIME STAGE
###################
FROM oven/bun:1-alpine AS runner
WORKDIR /app

# Install runtime dependencies
RUN apk update && apk add --no-cache \
    curl \
    ca-certificates \
    && rm -rf /var/cache/apk/* /tmp/*

# Set production environment
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy build output
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/package.json ./package.json

# Switch to non-root user
USER nextjs

EXPOSE 3000

CMD ["bun", "server.js"]
