import type { FC } from 'react'

const PLACEHOLDER_PROJECTS = Array.from({ length: 6 }, (_, index) => ({
    title: `Proyecto ${index + 1}`,
    subtitle: 'Placeholder de caso destacado',
}))

export const PortfolioSection: FC = () => {
    return (
        <section id="portfolio" className="min-h-screen px-6">
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Portfolio</p>
                    <h2 className="text-3xl font-semibold sm:text-4xl">Selección de trabajos</h2>
                    <p className="text-base text-slate-400">
                        Grid vacío a completar con imágenes, tags y enlaces a estudios de caso.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PLACEHOLDER_PROJECTS.map((project) => (
                        <article
                            key={project.title}
                            className="aspect-video rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
                        >
                            <p className="text-sm uppercase tracking-wide text-violet-200">
                                {project.subtitle}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">{project.title}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
