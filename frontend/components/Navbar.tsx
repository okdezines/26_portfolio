"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
                <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-slate-900/80 shadow-sm">
                        <img src="/avatar.svg" alt="Profile" className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Portfolio</p>
                        <p className="text-sm font-semibold text-white">Modern UI / Backend experience</p>
                    </div>
                </div>

                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-slate-200 transition hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 p-3 text-slate-200 transition hover:border-brand-500 hover:text-white md:hidden"
                    onClick={() => setOpen((value) => !value)}
                    aria-expanded={open}
                    aria-label="Toggle mobile menu"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                </button>
            </div>

            <AnimatePresence mode="wait">
                {open ? (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden"
                    >
                        <div className="flex flex-col gap-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-brand-500 hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}
