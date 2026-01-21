import type { FC } from 'react'

const PROCESS_STEPS = [
    { title: 'Descubrimiento', detail: 'Sesiones de trabajo para entender el negocio y la audiencia.' },
    { title: 'Concepto', detail: 'Definición del universo visual y de la narrativa.' },
    { title: 'Diseño', detail: 'Exploraciones UX/UI con prototipos navegables.' },
    { title: 'Desarrollo', detail: 'Implementación en React + Tailwind + Motion.' },
    { title: 'Lanzamiento', detail: 'Calidad (QA), rendimiento y traspaso documentado.' },
]

export const ProcessSection: FC = () => {
    return (
        <section id="process" className="min-h-screen px-6">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Proceso</p>
                    <h2 className="text-3xl font-semibold sm:text-4xl">Cómo colaboramos</h2>
                    <p className="text-base text-slate-400">
                        Estructura de fases genérica que luego ajustaremos a cada proyecto.
                    </p>
                </div>
                <ol className="space-y-4 border-l border-white/10 pl-6">
                    {PROCESS_STEPS.map((step, index) => (
                        <li key={step.title} className="space-y-1">
                            <p className="text-sm uppercase tracking-wide text-slate-400">
                                Paso {index + 1}
                            </p>
                            <p className="text-xl font-semibold">{step.title}</p>
                            <p className="text-sm text-slate-400">{step.detail}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
