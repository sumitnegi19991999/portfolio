import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import session from 'express-session';
import { type Express } from 'express';
import pgSession from 'connect-pg-simple';

export function setupSecurityMiddleware(app: Express) {
  // Basic security headers with Helmet
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          styleSrc: ["'self'", "'unsafe-inline'", 'https:'],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'", 'https:'],
          fontSrc: ["'self'", 'https:', 'data:'],
          objectSrc: ["'none'"],
          mediaSrc: ["'self'"],
          frameSrc: ["'none'"],
        },
      },
    })
  );

  // CORS configuration
  app.use(
    cors({
      origin: process.env.NODE_ENV === 'production' 
        ? process.env.CORS_ORIGIN || 'https://your-domain.com'
        : 'http://localhost:5000',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  // Rate limiting
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  });

  // Apply rate limiting to API routes
  app.use('/api', apiLimiter);

  // Session configuration
  if (!process.env.SESSION_SECRET) {
    throw new Error('SESSION_SECRET environment variable is required');
  }

  // Use PostgreSQL for session storage in production
  const sessionConfig: session.SessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax',
    }
  };

  // Only use PostgreSQL session store in production
  if (process.env.NODE_ENV === 'production') {
    const PostgresqlStore = pgSession(session);
    
    sessionConfig.store = new PostgresqlStore({
      conObject: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
      },
      tableName: 'session', // Table to store sessions
      createTableIfMissing: true // Automatically create the session table
    });
    
    console.log('Using PostgreSQL session store for production');
  } else {
    console.log('Using memory session store for development');
  }

  app.use(session(sessionConfig));
}