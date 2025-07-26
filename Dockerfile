# Use official n8n image
FROM n8nio/n8n:latest

# Set working directory
WORKDIR /home/node

# Install curl for health check
USER root
RUN apk add --no-cache curl

# Switch back to node user
USER node

# Copy entrypoint script and set permissions
COPY --chmod=755 entrypoint.sh /entrypoint.sh

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:${PORT:-5678}/healthz || exit 1

# Expose port (Render will override this)
EXPOSE 5678

# Set default command
ENTRYPOINT ["/entrypoint.sh"]
