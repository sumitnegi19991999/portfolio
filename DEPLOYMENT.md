# Deployment Guide

This document provides instructions for deploying the Modern Dev Portfolio application.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (we use Neon for serverless PostgreSQL)
- Domain name (optional but recommended for production)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="your-neon-database-url"

# Security
SESSION_SECRET="your-long-random-string"
CORS_ORIGIN="https://your-domain.com"

# Application
NODE_ENV="production"
PORT=5000
```

## Database Setup

1. Create a Neon account at https://neon.tech
2. Create a new project
3. Get your database connection string
4. Set up the database schema:
   ```bash
   npm run db:push
   ```
5. Seed the database (optional):
   ```bash
   npm run db:seed
   ```

## Building the Application

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build the application:
   ```bash
   npm run build
   ```
   This will:
   - Build the React frontend
   - Compile TypeScript files
   - Generate production assets

## Deployment Options

### Option 1: Traditional Hosting (e.g., DigitalOcean, AWS EC2)

1. Transfer the following files to your server:

   - `dist/` directory
   - `package.json`
   - `package-lock.json`
   - `.env` file (with production values)

2. On the server:

   ```bash
   npm install --production
   npm start
   ```

3. Set up a reverse proxy (Nginx recommended):

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Option 2: Platform as a Service (e.g., Heroku, Railway)

1. Connect your GitHub repository to your hosting platform
2. Configure environment variables in the platform's dashboard
3. Deploy using the platform's deployment process

## SSL/TLS Configuration

1. Install Certbot:

   ```bash
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. Obtain SSL certificate:
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

## Post-Deployment Checklist

1. Verify environment variables are set correctly
2. Test database connection
3. Check SSL/TLS certificate
4. Verify API endpoints are working
5. Test user authentication
6. Monitor error logs
7. Set up backup strategy for database

## Monitoring and Maintenance

1. Set up logging:

   - Application logs
   - Access logs
   - Error logs

2. Monitor server resources:

   - CPU usage
   - Memory usage
   - Disk space
   - Network traffic

3. Regular maintenance:
   - Update dependencies
   - Backup database
   - Rotate logs
   - Update SSL certificates

## Troubleshooting

Common issues and solutions:

1. **Database Connection Issues**

   - Verify DATABASE_URL is correct
   - Check network/firewall settings
   - Verify database user permissions

2. **Application Won't Start**

   - Check logs: `npm run start > app.log 2>&1`
   - Verify all environment variables are set
   - Check port availability

3. **SSL Certificate Issues**
   - Renew certificate: `sudo certbot renew`
   - Check certificate expiration: `sudo certbot certificates`

## Security Considerations

1. Enable security headers (already configured via helmet)
2. Set up rate limiting (configured)
3. Use secure session cookies (configured)
4. Keep dependencies updated
5. Regularly update SSL certificates
6. Monitor for suspicious activity
7. Back up data regularly

## Backup Strategy

1. Database backups:

   - Neon provides automatic backups
   - Set up additional backup strategy if needed

2. Application backups:
   - Back up environment variables
   - Back up uploaded files (if any)
   - Store backups securely

## Support

For issues or questions:

1. Check the troubleshooting section
2. Review application logs
3. Contact the development team

## License

[Your License Information]
