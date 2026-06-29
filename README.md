# Portfolio Project

This repository contains:

- `frontend/`: Next.js + TypeScript + Tailwind CSS + Framer Motion portfolio UI
- `backend/`: Express + SQLite API for projects, blog posts, testimonials, and contact messages

## Setup

### Frontend

1. `cd frontend`
2. `npm install`
3. Copy `.env.example` to `.env.local` to customize the backend host:
   - `NEXT_PUBLIC_BACKEND_URL=http://localhost:8000`
4. `npm run dev`

### Backend (Express)

1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. Use SQLite locally by default:
   - `DATABASE_STORAGE=database.sqlite`
   - Optional: set `DATABASE_URL` if you want to use PostgreSQL instead of SQLite.
5. Add email settings to `.env` so contact messages can be forwarded to your inbox:
   - `EMAIL_HOST=smtp.example.com`
   - `EMAIL_PORT=587`
   - `EMAIL_USER=your-smtp-user@example.com`
   - `EMAIL_PASS=your-smtp-password`
   - `CONTACT_EMAIL_TO=your-personal-email@example.com`
6. `npm run dev`

## API Endpoints

- `GET /api/projects/` - list portfolio projects
- `GET /api/blog-posts/` - list blog posts
- `GET /api/testimonials/` - list testimonials
- `GET /api/contact-messages/` - list contact messages
- `POST /api/contact-messages/` - submit a contact form message

## Notes

- The backend uses Express with SQLite by default.
- Projects, blog posts, testimonials, and messages are stored locally in SQLite.
- The frontend can use `NEXT_PUBLIC_BACKEND_URL` to point at the backend server during development.
