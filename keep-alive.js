const https = require('https');

// รับ URL จาก environment variable
const TARGET_URL = process.env.TARGET_URL || 'https://n8n-render-04dk.onrender.com';

function pingService() {
    const url = new URL(TARGET_URL);

    const options = {
        hostname: url.hostname,
        port: url.port || 443,
        path: '/healthz',
        method: 'GET',
        timeout: 10000,
        headers: {
            'User-Agent': 'Render-KeepAlive/1.0'
        }
    };

    console.log(`${new Date().toISOString()}: Pinging ${TARGET_URL}/healthz`);

    const req = https.request(options, (res) => {
        console.log(`${new Date().toISOString()}: Ping successful - Status: ${res.statusCode}`);

        // อ่าน response เพื่อให้ connection ปิดอย่างถูกต้อง
        res.on('data', () => { });
        res.on('end', () => {
            console.log(`${new Date().toISOString()}: Response completed`);
        });
    });

    req.on('error', (error) => {
        console.error(`${new Date().toISOString()}: Ping failed:`, error.message);
    });

    req.on('timeout', () => {
        console.error(`${new Date().toISOString()}: Ping timeout`);
        req.destroy();
    });

    req.end();
}

// สำหรับ cron job - รันครั้งเดียวแล้วจบ
console.log(`${new Date().toISOString()}: Keep-alive cron job started`);
pingService();

// รอให้ request เสร็จแล้วจบ process
setTimeout(() => {
    console.log(`${new Date().toISOString()}: Keep-alive cron job completed`);
    process.exit(0);
}, 15000); // รอ 15 วินาที