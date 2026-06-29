"use client";

import { motion } from "framer-motion";


type Testimonial = {
    id: number;
    author: string;
    role?: string;
    company?: string;
    quote: string;
    featured?: boolean;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-sm"
        >
            <p className="text-base leading-7 text-slate-300">“{testimonial.quote}”</p>
            <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-slate-400">
                    {testimonial.role || testimonial.company ? `${testimonial.role || ""}${testimonial.role && testimonial.company ? ", " : ""}${testimonial.company || ""}` : "Client"}
                </p>
            </div>
        </motion.div>

    );
}
