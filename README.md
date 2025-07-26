# n8n on Render with Keep-Alive

โปรเจค n8n ที่ deploy บน Render พร้อมระบบ keep-alive เพื่อป้องกันการ sleep

## URL Service
- **n8n Web App**: https://n8n-render-04dk.onrender.com
- **Health Check**: https://n8n-render-04dk.onrender.com/healthz

## Project Structure

```
.
├── n8n-app/                    # n8n Application
├── keep-alive-service/         # Keep-Alive Service  
├── deployment/                 # Deployment Configurations
└── README.md                  # This file
```

ดู [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) สำหรับรายละเอียดเพิ่มเติม

## Quick Start

### วิธีที่ 1: Render Blueprint (แนะนำ)
```bash
# 1. Clone และ push ขึ้น GitHub
git clone <your-repo>
git push origin main

# 2. ใน Render Dashboard:
# - เลือก "New" → "Blueprint"
# - เชื่อมต่อ GitHub repo
# - ใช้ deployment/render.yaml
```

### วิธีที่ 2: Deploy แยก
1. **n8n App**: Deploy `n8n-app/` เป็น Web Service
2. **Keep-Alive**: Deploy `keep-alive-service/` เป็น Cron Job

ดู [deployment/README.md](deployment/README.md) สำหรับรายละเอียด

## Components

### 🚀 n8n-app
- Workflow automation platform
- Docker-based deployment
- Basic authentication enabled

### ⏰ keep-alive-service  
- Prevents Render free tier sleep
- Runs every 14 minutes
- Node.js cron job

### 📦 deployment
- Multiple deployment options
- Render Blueprint configuration
- GitHub Actions alternative

## การเข้าใช้งาน

1. เปิด https://n8n-render-04dk.onrender.com
2. Login ด้วย:
   - Username: `admin`
   - Password: ตามที่ตั้งใน Environment Variables

## การปรับแต่ง

- **เปลี่ยน URL**: แก้ไขใน deployment configs และ environment variables
- **เปลี่ยน Schedule**: แก้ไข cron expression ใน deployment/render.yaml
- **เพิ่มฟีเจอร์**: แก้ไขใน directories ที่เกี่ยวข้อง

## หมายเหตุ

- Render free tier มี limitations
- Service อาจใช้เวลาสักครู่ในการ wake up ครั้งแรก
- ตรวจสอบ logs ใน Render dashboard หากมีปัญหา