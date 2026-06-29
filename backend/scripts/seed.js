const { sequelize, Project, BlogPost, Testimonial, ContactMessage } = require("../models");

async function seed() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    const projects = [
      { title: "Brand Portfolio", description: "A dynamic portfolio with animations, reusable components, and responsive UX.", tech: "Next.js · TypeScript · Tailwind · Framer Motion", url: "https://example.com", featured: true },
      { title: "E-commerce UI", description: "A modern product showcase built with server-rendered React and clean design.", tech: "React · Next.js · Tailwind · PostgreSQL", url: "https://example.com", featured: false },
    ];

    const posts = [
      { title: "Building a portfolio with Next.js and PostgreSQL", slug: "nextjs-postgres", excerpt: "Learn how to connect a modern React frontend to an Express + PostgreSQL backend.", content: "Long form content.", published_at: new Date(), featured: true },
      { title: "Designing interactive interfaces with Framer Motion", slug: "framer-motion", excerpt: "Add motion and attention to your site using Framer Motion.", content: "Long form content.", published_at: new Date(), featured: false },
    ];

    const testimonials = [
      { author: "Amira K.", role: "Product Manager", company: "Verse Labs", quote: "The design system and backend integration made our launch much faster.", featured: true },
      { author: "Liam W.", role: "Founder", company: "Coda Creative", quote: "Great communication and clean code.", featured: false },
    ];

    const messages = [
      { name: "Test User", email: "test@example.com", message: "Hello — this is a test message." },
    ];

    await Promise.all(projects.map((p) => Project.create(p)));
    await Promise.all(posts.map((p) => BlogPost.create(p)));
    await Promise.all(testimonials.map((t) => Testimonial.create(t)));
    await Promise.all(messages.map((m) => ContactMessage.create(m)));

    console.log("Seeding complete.");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seed();
