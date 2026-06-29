import HeroBanner from "../components/HeroBanner.tsx";
import BlogCard from "../components/BlogCard.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Navbar from "../components/Navbar.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import SectionMenu from "../components/SectionMenu.tsx";
import TestimonialCard from "../components/TestimonialCard.tsx";

declare const process: {
    env: {
        NEXT_PUBLIC_BACKEND_URL?: string;
    };
};

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

const sampleProjects = [
    {
        id: 1,
        title: "Brand Portfolio",
        description: "A dynamic portfolio with animations, reusable components, and responsive UX.",
        tech: "Next.js · TypeScript · Tailwind · Framer Motion",
        url: "https://example.com",
        featured: true,
    },
    {
        id: 2,
        title: "E-commerce UI",
        description: "A modern product showcase pages built with server-rendered React and clean design.",
        tech: "React · Next.js · Tailwind · SQLite",
        url: "https://example.com",
        featured: false,
    },
];

const sampleBlogPosts = [
    {
        id: 1,
        title: "Building a portfolio with Next.js and SQLite",
        excerpt: "Learn how to connect a modern React frontend to an Express + SQLite backend with a polished UI.",
        published_at: "2026-06-01T00:00:00.000Z",
        featured: true,
    },
    {
        id: 2,
        title: "Designing interactive interfaces with Framer Motion",
        excerpt: "Add motion and attention to your site using Framer Motion page transitions and animations.",
        published_at: "2026-05-15T00:00:00.000Z",
        featured: false,
    },
];

const sampleTestimonials = [
    {
        id: 1,
        author: "Amira K.",
        role: "Product Manager",
        company: "Verse Labs",
        quote: "The design system and backend integration made our launch much faster. The final site felt polished and stable.",
        featured: true,
    },
    {
        id: 2,
        author: "Liam W.",
        role: "Founder",
        company: "Coda Creative",
        quote: "Great communication and clean code. The portfolio has a sleek, modern experience across desktop and mobile.",
        featured: false,
    },
];

async function getProjects() {
    try {
        const response = await fetch(`${backendUrl}/api/projects/`, { cache: "no-store" });
        if (!response.ok) throw new Error("Backend fetch failed");
        return (await response.json()) as typeof sampleProjects;
    } catch {
        return sampleProjects;
    }
}

async function getBlogPosts() {
    try {
        const response = await fetch(`${backendUrl}/api/blog-posts/`, { cache: "no-store" });
        if (!response.ok) throw new Error("Backend fetch failed");
        return (await response.json()) as typeof sampleBlogPosts;
    } catch {
        return sampleBlogPosts;
    }
}

async function getTestimonials() {
    try {
        const response = await fetch(`${backendUrl}/api/testimonials/`, { cache: "no-store" });
        if (!response.ok) throw new Error("Backend fetch failed");
        return (await response.json()) as typeof sampleTestimonials;
    } catch {
        return sampleTestimonials;
    }
}

export default async function Home() {
    const [projects, blogPosts, testimonials] = await Promise.all([
        getProjects(),
        getBlogPosts(),
        getTestimonials(),
    ]);

    return (
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
            <Navbar />
            <section className="mt-6 space-y-8">
                <HeroBanner />
                <SectionMenu />
            </section>

            <section className="mt-16 rounded-3xl border border-white/10 bg-slate-950/60 p-10">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About</p>
                        <h2 className="mt-4 text-3xl font-semibold text-white">A polished, data-driven portfolio.</h2>
                        <p className="mt-6 text-base leading-7 text-slate-300">
                            I specialize in fast, accessible UI and clean developer experience. This site pairs a Next.js frontend with an Express backend and local SQLite storage so your content can be managed through a REST API.
                        </p>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-slate-900/80 p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border hover:border-brand-500 hover:bg-slate-900/90">
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Frontend</p>
                                <p className="mt-3 text-sm text-slate-200">Next.js · TypeScript · Tailwind · Framer Motion</p>
                            </div>
                            <div className="rounded-3xl bg-slate-900/80 p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border hover:border-brand-500 hover:bg-slate-900/90">
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Backend</p>
                                <p className="mt-3 text-sm text-slate-200">Express · SQLite · REST API</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-slate-900/80 p-6 sm:p-8">
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Skills</p>
                        <div className="mt-6 grid gap-4 text-slate-200 sm:grid-cols-2">
                            {[
                                "Responsive UI",
                                "Animated transitions",
                                "API-driven content",
                                "CMS workflows",
                                "Type-safe code",
                                "Design systems",
                            ].map((skill) => (
                                <div key={skill} className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="mt-16">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects</p>
                        <h2 className="mt-2 text-3xl font-semibold text-white">Selected work</h2>
                    </div>
                    <p className="max-w-xl text-sm text-slate-400">
                        The project list is stored in SQLite and served through a clean Express REST API.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            <section id="testimonials" className="mt-16 rounded-3xl border border-white/10 bg-slate-950/60 p-10">
                <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Testimonials</p>
                    <h2 className="mt-2 text-3xl font-semibold text-white">What clients say</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </section>

            <section id="blog" className="mt-16">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Blog</p>
                        <h2 className="mt-2 text-3xl font-semibold text-white">Latest insights</h2>
                    </div>
                    <p className="max-w-xl text-sm text-slate-400">
                        Blog posts can be managed in SQLite and served through the Express API.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>

            <section id="contact" className="mt-16 rounded-3xl border border-white/10 bg-slate-950/60 p-10">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
                        <h2 className="mt-4 text-3xl font-semibold text-white">Let€™s build something together.</h2>
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
                            Send a message and it will be stored in SQLite and accessible through the Express backend API.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}






