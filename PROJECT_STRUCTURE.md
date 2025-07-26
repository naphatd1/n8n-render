# Project Structure

```
.
├── n8n-app/                    # n8n Application
│   ├── Dockerfile             # Docker configuration
│   ├── entrypoint.sh          # n8n startup script
│   ├── .env.example           # Environment variables example
│   ├── .gitignore            # Git ignore rules
│   └── README.md             # n8n app documentation
│
├── keep-alive-service/         # Keep-Alive Service
│   ├── keep-alive.js         # Main keep-alive script
│   ├── package.json          # Node.js dependencies
│   ├── .env.example          # Environment variables example
│   ├── .gitignore           # Git ignore rules
│   └── README.md            # Keep-alive service documentation
│
├── deployment/                 # Deployment Configurations
│   ├── render.yaml           # Render Blueprint configuration
│   ├── github-actions-keep-alive.yml  # GitHub Actions workflow
│   └── README.md             # Deployment options guide
│
├── PROJECT_STRUCTURE.md        # This file
└── README.md                  # Main project documentation
```

## Components

### n8n-app
- **Purpose**: Main n8n workflow automation application
- **Platform**: Docker on Render Web Service
- **URL**: https://n8n-render-04dk.onrender.com

### keep-alive-service
- **Purpose**: Prevent Render free tier from sleeping
- **Platform**: Node.js on Render Cron Job
- **Schedule**: Every 14 minutes

### deployment
- **Purpose**: Various deployment configurations
- **Options**: Render Blueprint, GitHub Actions, Manual setup

## Deployment Strategies

1. **All-in-One**: Use `deployment/render.yaml` for Blueprint deployment
2. **Separate**: Deploy each service individually
3. **Hybrid**: Use external keep-alive services

## Getting Started

1. Choose deployment method from `deployment/README.md`
2. Configure environment variables using `.env.example` files
3. Deploy services according to chosen method
4. Monitor logs in Render dashboard

## Customization

- **Change URLs**: Update all references to `n8n-render-04dk.onrender.com`
- **Modify Schedule**: Change cron expression in deployment configs
- **Add Features**: Extend services in their respective directories