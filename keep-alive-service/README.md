# Keep-Alive Service for Render

Cron job service ที่ป้องกัน Render free tier services จากการ sleep

## การทำงาน

- รันทุก 14 นาที (ก่อน Render sleep ที่ 15 นาที)
- Ping ไปที่ health check endpoint
- ป้องกัน service จากการ sleep
- ไม่ต้องพึ่งบริการภายนอก

## การ Deploy บน Render

### Cron Job Service Configuration:
- **Environment**: Node.js
- **Build Command**: `npm install`
- **Start Command**: `node keep-alive.js`
- **Schedule**: `*/14 * * * *` (ทุก 14 นาที)

### Environment Variables:
```
TARGET_URL=https://n8n-render-04dk.onrender.com
```

## การใช้งาน

### ทดสอบ Local:
```bash
npm install
TARGET_URL=https://your-service.onrender.com npm start
```

### Deploy บน Render:
1. สร้าง Cron Job service ใหม่
2. เชื่อมต่อ GitHub repo
3. ตั้งค่า environment variables
4. ตั้ง schedule: `*/14 * * * *`

## ไฟล์สำคัญ

- `keep-alive.js` - Main script
- `package.json` - Node.js dependencies
- `.env.example` - ตัวอย่าง environment variables

## การปรับแต่ง

### เปลี่ยน Target URL:
แก้ไข environment variable `TARGET_URL`

### เปลี่ยน Schedule:
แก้ไขใน Render dashboard หรือ render.yaml

### เปลี่ยน Health Check Path:
แก้ไข `path: '/healthz'` ใน keep-alive.js

## หมายเหตุ

- Render free tier มี limitations สำหรับ cron jobs
- Service จะรันเฉพาะเวลาที่กำหนด
- ตรวจสอบ logs ใน Render dashboard