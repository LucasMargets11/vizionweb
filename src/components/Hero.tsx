import type { FC } from 'react'

export const Hero: FC = () => {
    return (
        <section
            id="hero"
            className="min-h-screen bg-white px-6 py-24 text-slate-900"
        >
            <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
                <div className="space-y-8 lg:col-span-7">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                        Vizion Studio
                    </p>
                    <h1 className="space-y-4 text-left text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                        <span className="flex items-center gap-4">
                            LÍDERES EN CONTENIDO.
                            <span className="inline-block h-4 w-4 rounded-full bg-blue-600" aria-hidden />
                        </span>
                        <span className="flex items-center gap-4">
                            TODA TU PRESENCIA DIGITAL.
                            <span className="inline-block h-4 w-4 rounded-full bg-[#FF8A3D]" aria-hidden />
                        </span>
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600">
                        Diseñamos estrategias, productos digitales y narrativas visuales que conectan con tu audiencia.
                        Este layout es un punto de partida para la nueva identidad de Vizion Studio.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#contact"
                            className="rounded-full bg-blue-600 px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500"
                        >
                            Agenda una llamada
                        </a>
                        <a
                            href="#portfolio"
                            className="rounded-full border border-slate-300 px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest text-slate-900 transition-colors hover:border-slate-900"
                        >
                            Ver proyectos
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="relative mx-auto flex h-full max-w-sm items-center justify-center">
                        <div className="absolute inset-0 -z-10 blur-3xl">
                            <div className="absolute left-0 top-4 h-40 w-40 rounded-[3rem] bg-blue-600/40"></div>
                            <div className="absolute right-0 bottom-0 h-36 w-36 rounded-[3rem] bg-[#FF8A3D]/30"></div>
                        </div>
                        <div className="flex w-full max-w-sm flex-col gap-6">
                            <div className="h-48 rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-400"></div>
                            <div className="flex items-center gap-6">
                                <div className="h-32 flex-1 rounded-[2rem] bg-gradient-to-br from-[#FF8A3D] to-amber-300"></div>
                                <div className="h-32 w-32 rounded-[2rem] border border-slate-200 bg-white"></div>
                            </div>
                            <div className="flex items-center justify-end">
                                <div className="h-16 w-32 rounded-full border border-slate-200 bg-slate-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
