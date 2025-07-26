# Deployment Options

มีหลายวิธีในการ deploy และ keep-alive

## ตัวเลือกที่ 1: Render Blueprint (แนะนำ)

ใช้ `render.yaml` เพื่อ deploy ทั้ง 2 services พร้อมกัน:

1. Push โค้ดขึ้น GitHub
2. ใน Render Dashboard เลือก "New" → "Blueprint"
3. เชื่อมต่อ GitHub repo
4. Render จะสร้าง services อัตโนมัติ

## ตัวเลือกที่ 2: Deploy แยก

### n8n App:
1. สร้าง Web Service
2. เชื่อมต่อ repo และเลือกโฟลเดอร์ `n8n-app`
3. ตั้ง Environment Variables ตาม `.env.example`

### Keep-Alive Service:
1. สร้าง Cron Job Service
2. เชื่อมต่อ repo และเลือกโฟลเดอร์ `keep-alive-service`
3. ตั้ง Schedule: `*/14 * * * *`
4. ตั้ง Environment Variable: `TARGET_URL`

## ตัวเลือกที่ 3: GitHub Actions

1. Copy `github-actions-keep-alive.yml` ไปที่ `.github/workflows/`
2. แก้ไข URL ให้ตรงกับ service
3. GitHub จะรัน cron job อัตโนมัติ

## ตัวเลือกที่ 4: External Services

ใช้บริการภายนอกเช่น:
- UptimeRobot
- Cron-job.org
- Pingdom

## คำแนะนำ

- **ใช้ Render Blueprint** สำหรับความง่าย
- **ใช้ GitHub Actions** ถ้าไม่ต้องการใช้ Render cron job
- **ใช้ External Services** สำหรับความเชื่อถือได้สูงสุด