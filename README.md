# Portfolio Project

This repository contains:

- `frontend/`: Next.js + TypeScript + Tailwind CSS + Framer Motion portfolio UI
- `backend/`: Express + PostgreSQL API for projects, blog posts, testimonials, and contact messages

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
4. Set `DATABASE_URL` in `.env`, for example:
   - `DATABASE_URL=postgres://postgres:password@127.0.0.1:5432/portfolio`
   - Or use a hosted PostgreSQL provider connection string.
5. `npm run dev`

## API Endpoints

- `GET /api/projects/` - list portfolio projects
- `GET /api/blog-posts/` - list blog posts
- `GET /api/testimonials/` - list testimonials
- `GET /api/contact-messages/` - list contact messages
- `POST /api/contact-messages/` - submit a contact form message

## Notes

- The backend uses Express with PostgreSQL.
- Projects, blog posts, testimonials, and messages are stored in PostgreSQL.
- The frontend can use `NEXT_PUBLIC_BACKEND_URL` to point at the backend server during development.
