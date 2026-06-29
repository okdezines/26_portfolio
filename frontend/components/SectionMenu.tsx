const sections = [
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export default function SectionMenu() {
    return (
        <section className="mt-8 lg:hidden">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Jump to</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {sections.map((section) => (
                        <a
                            key={section.href}
                            href={section.href}
                            className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-center text-sm font-medium text-slate-200 transition hover:border-brand-500 hover:text-white"
                        >
                            {section.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
