# Portfolio Website with Full-Stack Architecture

## Overview

This project is a full-stack developer portfolio website built with React, TypeScript, and a Node.js Express backend. It features a modern UI with animations, a contact form, resume download functionality, and server-side validation. The application uses a PostgreSQL database (via Drizzle ORM) for data storage and is designed with a clean architecture separating client, server, and shared code.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation of concerns:

1. **Frontend**: React with TypeScript, using the ShadCN UI component library and Framer Motion for animations. Follows a component-based architecture with dedicated UI components, layout sections, and hooks.

2. **Backend**: Express.js server with API routes for contact form submission and resume downloads. The server is configured to serve the static frontend assets in production.

3. **Database**: PostgreSQL with Drizzle ORM for database schema management and migrations.

4. **Shared Layer**: Common types and schemas shared between frontend and backend to ensure type safety across the application.

5. **Build System**: Vite for frontend bundling and ESBuild for server-side code, providing fast development and optimized production builds.

## Key Components

### Frontend

- **UI Framework**: Uses ShadCN UI library (based on Radix UI primitives) with a comprehensive set of accessible, reusable components.
- **Styling**: TailwindCSS with a custom theme configuration for consistent styling.
- **State Management**: React Query for server state management.
- **Routing**: Wouter for lightweight routing.
- **Animations**: Framer Motion for smooth page transitions and scroll animations.
- **Form Handling**: React Hook Form with Zod validation for form state management and validation.

### Backend

- **Server**: Express.js server handling API requests and serving static assets.
- **Storage**: Drizzle ORM for database interactions, with PostgreSQL as the underlying database.
- **Validation**: Zod schemas for validating API request data.
- **Middleware**: Custom logging middleware to track API requests and responses.

### Data Flow

1. **Contact Form Submission**:
   - User inputs data in the form
   - Client-side validation using Zod
   - Form data sent to `/api/contact` endpoint
   - Server validates the data using the shared schema
   - Server returns success/error response
   - UI displays toast notification based on response

2. **Resume Download**:
   - User clicks on download resume button
   - Request sent to `/api/download-resume` endpoint
   - Server locates the file and streams it to the client
   - Browser initiates the download

## External Dependencies

### Frontend Dependencies
- React and React DOM for UI rendering
- Framer Motion for animations
- React Hook Form with Zod resolver for form handling
- TanStack React Query for data fetching
- Radix UI component primitives
- Tailwind CSS for styling
- Wouter for routing

### Backend Dependencies
- Express for the server framework
- Drizzle ORM for database interactions
- Neon Database connector for serverless PostgreSQL connections
- Zod for validation

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Development Mode**:
   - `npm run dev` starts both the frontend development server and backend API
   - Vite handles hot module replacement for the frontend
   - Backend changes require server restart

2. **Production Build**:
   - `npm run build` creates optimized frontend assets and bundles the server
   - Frontend assets are built using Vite
   - Server code is bundled using ESBuild

3. **Production Deployment**:
   - The application is served as a single Express server
   - Static frontend assets are served from the dist/public directory
   - API endpoints are accessible under the /api path

4. **Database**:
   - The application is set up to use PostgreSQL via the Drizzle ORM
   - Database schema is defined in shared/schema.ts
   - Migrations can be run using `npm run db:push`

## Development Workflow

1. Run `npm run dev` to start the development server
2. Frontend code changes in the `client/src` directory
3. Backend API endpoints are defined in `server/routes.ts`
4. Database schema changes should be made in `shared/schema.ts`
5. Run `npm run db:push` after schema changes to update the database
6. Run `npm run build` to create a production build
7. Run `npm run start` to start the production server