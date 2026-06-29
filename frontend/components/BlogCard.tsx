type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    published_at?: string;
    featured?: boolean;
    slug?: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-slate-900">
            <div className="flex items-center justify-between gap-4 text-slate-400">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                    {post.featured ? "Featured" : "Article"}
                </span>
                {post.published_at ? (
                    <span className="text-xs">{new Date(post.published_at).toLocaleDateString()}</span>
                ) : null}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">{post.excerpt}</p>
        </article>
    );
}
