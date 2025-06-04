import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import session from 'express-session';
import { type Express } from 'express';
import pgSession from 'connect-pg-simple';
import memoryStore from 'memorystore';

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
        ? process.env.CORS_ORIGIN || '*' // Fallback to any origin if not specified
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

  // Create a fallback session secret if not provided
  const sessionSecret = process.env.SESSION_SECRET || 'fallback-session-secret-for-development';
  
  // Create MemoryStore constructor for development or fallback
  const MemoryStore = memoryStore(session);

  // Session configuration
  const sessionConfig: session.SessionOptions = {
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax',
    }
  };

  // Only use PostgreSQL session store in production and if DATABASE_URL is provided
  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    try {
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
    } catch (error) {
      console.error('Failed to initialize PostgreSQL session store:', error);
      console.log('Falling back to memory store due to database connection error');
      
      // Fallback to memory store with expiration
      sessionConfig.store = new MemoryStore({
        checkPeriod: 86400000 // Prune expired entries every 24h
      });
    }
  } else {
    console.log('Using memory session store for development or missing DATABASE_URL');
    
    // Use memory store with expiration
    sessionConfig.store = new MemoryStore({
      checkPeriod: 86400000 // Prune expired entries every 24h
    });
  }

  app.use(session(sessionConfig));
}