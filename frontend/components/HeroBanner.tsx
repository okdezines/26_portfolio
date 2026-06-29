"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 sm:p-10 shadow-[0_25px_120px_-30px_rgba(56,189,248,0.35)]"
        >
            <p className="text-brand-300 uppercase tracking-[0.4em] text-sm font-semibold">
                Portfolio
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                I build expressive web experiences with React, Next.js, and PostgreSQL.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                A modern portfolio with API-driven projects, blog content, testimonials, and a contact workflow powered by FastAPI and PostgreSQL.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
                >
                    View projects
                </a>
                <a
                    href="#blog"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-500"
                >
                    Read posts
                </a>
            </div>
        </motion.div>
    );
}
