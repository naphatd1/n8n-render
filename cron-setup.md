# Keep Render Service Alive

## ตัวเลือก 1: UptimeRobot (ฟรี)
1. ไปที่ https://uptimerobot.com
2. สร้าง monitor ใหม่
3. ใส่ URL: https://n8n-render-04dk.onrender.com/healthz
4. ตั้ง interval: 5 นาที
5. Monitor type: HTTP(s)

## ตัวเลือก 2: Cron-job.org (ฟรี)
1. ไปที่ https://cron-job.org
2. สร้าง cron job ใหม่
3. URL: https://n8n-render-04dk.onrender.com/healthz
4. Schedule: */14 * * * * (ทุก 14 นาที)

## ตัวเลือก 3: GitHub Actions
สร้าง workflow ใน .github/workflows/keep-alive.yml

## ตัวเลือก 4: Render Cron Job
สร้าง Render Cron Job service ที่รัน keep-alive.js