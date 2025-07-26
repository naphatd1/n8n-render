# n8n on Render with Keep-Alive

โปรเจค n8n ที่ deploy บน Render พร้อมระบบ keep-alive เพื่อป้องกันการ sleep

## URL Service
- **n8n Web App**: https://n8n-render-04dk.onrender.com
- **Health Check**: https://n8n-render-04dk.onrender.com/healthz

## การ Deploy

### วิธีที่ 1: ใช้ Blueprint (แนะนำ)
1. Push โค้ดขึ้น GitHub
2. ใน Render Dashboard เลือก "New" → "Blueprint"
3. เชื่อมต่อ GitHub repo
4. Render จะสร้าง services อัตโนมัติ:
   - `n8n-app` (Web Service)
   - `n8n-keep-alive` (Cron Job)

### วิธีที่ 2: สร้างแยก
1. **Web Service**:
   - Environment: Docker
   - Dockerfile Path: `./Dockerfile`
   - ตั้ง Environment Variables ตาม `.env.example`

2. **Cron Job Service**:
   - Environment: Node.js
   - Build Command: `npm install`
   - Start Command: `node keep-alive.js`
   - Schedule: `*/14 * * * *`
   - Environment Variable: `TARGET_URL=https://n8n-render-04dk.onrender.com`

## Environment Variables

### สำหรับ Web Service (n8n):
```
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your-secure-password
N8N_HOST=0.0.0.0
N8N_EDITOR_BASE_URL=https://n8n-render-04dk.onrender.com
WEBHOOK_TUNNEL_URL=https://n8n-render-04dk.onrender.com
N8N_DIAGNOSTICS_ENABLED=false
```

### สำหรับ Cron Job (keep-alive):
```
TARGET_URL=https://n8n-render-04dk.onrender.com
```

## ไฟล์สำคัญ

- `Dockerfile` - Docker configuration สำหรับ n8n
- `entrypoint.sh` - Script เริ่มต้น n8n
- `keep-alive.js` - Script ping service เพื่อป้องกัน sleep
- `render.yaml` - Blueprint configuration สำหรับ Render
- `package.json` - Dependencies สำหรับ keep-alive service

## การทำงานของ Keep-Alive

- Cron job จะรันทุก 14 นาที
- Ping ไปที่ `/healthz` endpoint
- ป้องกัน Render free tier sleep (15 นาที)
- ไม่ต้องพึ่งบริการภายนอก

## การเข้าใช้งาน

1. เปิด https://n8n-render-04dk.onrender.com
2. Login ด้วย:
   - Username: `admin`
   - Password: ตามที่ตั้งใน Environment Variables

## หมายเหตุ

- Render free tier มี limitations
- Service อาจใช้เวลาสักครู่ในการ wake up ครั้งแรก
- ตรวจสอบ logs ใน Render dashboard หากมีปัญหา