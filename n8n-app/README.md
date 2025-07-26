# n8n App on Render

n8n workflow automation tool deployed on Render

## URL Service
- **n8n Web App**: https://n8n-render-04dk.onrender.com
- **Health Check**: https://n8n-render-04dk.onrender.com/healthz

## การ Deploy บน Render

### Web Service Configuration:
- **Environment**: Docker
- **Dockerfile Path**: `./Dockerfile`
- **Build Command**: (ปล่าวไว้)
- **Start Command**: `./entrypoint.sh`

### Environment Variables:
```
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your-secure-password
N8N_HOST=0.0.0.0
N8N_EDITOR_BASE_URL=https://n8n-render-04dk.onrender.com
WEBHOOK_TUNNEL_URL=https://n8n-render-04dk.onrender.com
N8N_DIAGNOSTICS_ENABLED=false
```

## การใช้งาน

1. เปิด https://n8n-render-04dk.onrender.com
2. Login ด้วย:
   - Username: `admin`
   - Password: ตามที่ตั้งใน Environment Variables

## ไฟล์สำคัญ

- `Dockerfile` - Docker configuration
- `entrypoint.sh` - Script เริ่มต้น n8n
- `.env.example` - ตัวอย่าง environment variables

## หมายเหตุ

- Render free tier จะ sleep หลัง 15 นาที ไม่มีการใช้งาน
- ใช้ร่วมกับ keep-alive service เพื่อป้องกัน sleep
- Service อาจใช้เวลาสักครู่ในการ wake up ครั้งแรก