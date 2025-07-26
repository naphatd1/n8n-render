#!/bin/bash

# Ensure required folders exist
mkdir -p /home/node/.n8n

# Set correct permissions
chown -R node:node /home/node/.n8n

# Start n8n
exec su-exec node n8n
