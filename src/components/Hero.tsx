import type { FC } from 'react'
import VizionLogo3D from './VizionLogo3D'

export const Hero: FC = () => {
    return (
        <section
            id="hero"
            className="relative bg-white px-6 pt-0 pb-12 text-slate-900"
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start pt-0">
                <div className="space-y-8 lg:col-span-7">
                    
                    <h1 className="space-y-4 text-left text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                        <span className="flex items-center gap-4">
                            HISTORIAS EN PANTALLA.
                        </span>
                        <span className="flex items-center gap-4">
                            SISTEMAS QUE LAS POTENCIAN.
                        </span>
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600">
                        En Vizion combinamos producción audiovisual con desarrollo web y automatizaciones. Creamos contenido y herramientas digitales que trabajan juntas para atraer, convertir y fidelizar a tu audiencia.
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
            </div>

            {/* 3D Logo Container */}
            <div className="absolute bottom-[-60px] right-[8%] hidden h-[350px] w-[350px] md:block lg:h-[500px] lg:w-[500px] pointer-events-none md:pointer-events-auto">
                <VizionLogo3D />
            </div>
        </section>
    )
}
