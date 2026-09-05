# Dockerfile for Raspberry Pi 4 (ARM64, 4GB RAM) deployment.
#
# Build stage uses Bun: installs from the committed bun.lock (reproducible)
# instead of npm — this repo has no package-lock.json, and bun install is
# far faster on the Pi.
# Runtime stage also uses Bun: the standalone server.js boots with
# `bun server.js` instead of `node server.js`. If anything misbehaves on
# the Pi, reverting to node:24-bookworm-slim + node is a two-line change.
#
# On the 4GB Pi, bump swap to >= 2GB before the first build (Turbopack is
# memory-hungry): set CONF_SWAPSIZE=2048 in /etc/dphys-swapfile, then
# `sudo systemctl restart dphys-swapfile`.

###################
# BUILD STAGE
###################
FROM oven/bun:1 AS build

WORKDIR /app

# Install dependencies from the lockfile (devDependencies included — needed for the build)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source and build
COPY . .
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

RUN bun run build

###################
# RUNTIME STAGE
###################
FROM oven/bun:1 AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Non-root user
RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs nextjs

# Copy the standalone build output
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["bun", "server.js"]
