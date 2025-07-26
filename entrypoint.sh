#!/bin/sh
set -e

# สร้างโฟลเดอร์ถ้ายังไม่มี
mkdir -p ~/.n8n

# ใช้ PORT ที่ Render กำหนดให้
export N8N_PORT=${PORT:-5678}
export N8N_HOST=0.0.0.0

echo "Starting n8n on ${N8N_HOST}:${N8N_PORT}"

# เริ่มรัน n8n
exec n8n start