type Project = {
    id: number;
    title: string;
    description: string;
    tech: string;
    url: string;
    featured?: boolean;
    created_at?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-slate-900"
        >
            <div className="flex flex-wrap items-center justify-between gap-3 text-slate-400">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                    {project.featured ? "Featured" : "Project"}
                </span>
                {project.created_at ? (
                    <span className="text-xs text-slate-400">
                        {new Date(project.created_at).toLocaleDateString()}
                    </span>
                ) : (
                    <span className="text-xs">View case</span>
                )}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
            <p className="mt-6 text-sm text-slate-400">{project.tech}</p>
        </a>
    );
}
