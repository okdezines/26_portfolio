"use client";

declare const process: {
    env: {
        NEXT_PUBLIC_BACKEND_URL?: string;
    };
};

import { ChangeEvent, FormEvent, useState } from "react";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

type FormState = {
    name: string;
    email: string;
    message: string;
};

const initialState: FormState = {
    name: "",
    email: "",
    message: "",
};

export default function ContactForm() {
    const [formData, setFormData] = useState<FormState>(initialState);
    const [status, setStatus] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch(`${backendUrl}/api/contact-messages/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setStatus("Message sent! I will get back to you soon.");
            setFormData(initialState);
        } catch (error) {
            setStatus("Could not send the message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-slate-900/80 p-8">
            <label className="block text-sm font-medium text-slate-300">
                Name
                <input
                    value={formData.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: event.target.value })}
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
                    type="text"
                    placeholder="Your name"
                    required
                />
            </label>

            <label className="block text-sm font-medium text-slate-300">
                Email
                <input
                    value={formData.email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: event.target.value })}
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
                    type="email"
                    placeholder="hello@example.com"
                    required
                />
            </label>

            <label className="block text-sm font-medium text-slate-300">
                Message
                <textarea
                    value={formData.message}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: event.target.value })}
                    className="mt-3 min-h-[160px] w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
                    placeholder="What would you like to build?"
                    required
                />
            </label>

            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {status ? <p className="text-sm text-slate-300">{status}</p> : null}
        </form>
    );
}
