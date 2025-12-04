import type { FC } from 'react'
import { motion } from 'framer-motion'

const SERVICES = [
    {
        title: 'Producción audiovisual',
        description: 'Reels, piezas comerciales y contenido documental pensados para verse increíble en pantalla.',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-blue-50" />
                <circle cx="50" cy="50" r="30" className="fill-blue-600" />
                <path d="M50 50 L80 50 A30 30 0 0 1 50 80 Z" className="fill-cyan-400" />
            </svg>
        )
    },
    {
        title: 'Desarrollo web & landings',
        description: 'Sitios rápidos y claros que conectan tu historia con resultados medibles.',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-cyan-50" />
                <rect x="20" y="20" width="30" height="60" className="fill-slate-900" />
                <rect x="50" y="20" width="30" height="30" className="fill-cyan-500" />
                <circle cx="65" cy="65" r="15" className="fill-blue-400" />
            </svg>
        )
    },
    {
        title: 'Sistemas & automatizaciones',
        description: 'Integraciones, flujos y bots que ahorran tiempo y convierten mejor tus oportunidades.',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-indigo-50" />
                <path d="M20 50 A30 30 0 0 1 80 50 L80 80 L20 80 Z" className="fill-indigo-500" />
                <circle cx="70" cy="30" r="15" className="fill-cyan-300" />
            </svg>
        )
    },
    {
        title: 'Estrategia & consultoría digital',
        description: 'Acompañamiento para alinear contenido, medios y datos con tus objetivos de negocio.',
        icon: (
            <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" className="fill-slate-50" />
                <circle cx="50" cy="50" r="40" className="fill-slate-200" />
                <path d="M50 50 L90 50 L50 90 Z" className="fill-slate-800" />
                <rect x="20" y="20" width="30" height="30" className="fill-blue-500" />
            </svg>
        )
    }
]

export const ServicesSection: FC = () => {
    return (
        <section className="w-full bg-white py-24 px-6">
            <div className="mx-auto max-w-[90rem]">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-6 lg:pr-12">
                        <div className="sticky top-24">
                            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl">
                                Servicios
                            </h2>
                            <p className="mt-8 max-w-sm text-lg leading-relaxed text-slate-600">
                                Combinamos historias en pantalla con sistemas que las potencian. 
                                Creamos soluciones integrales donde el diseño y la tecnología trabajan juntos.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-6">
                        <div className="flex flex-col">
                            {SERVICES.map((service, index) => (
                                <div 
                                    key={index} 
                                    className="group flex flex-col gap-10 border-b border-slate-200 py-16 first:pt-0 last:border-0 sm:flex-row sm:items-start"
                                >
                                    {/* Icon */}
                                    <motion.div 
                                        className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-sm"
                                        initial={{ scale: 1 }}
                                        whileInView={{ scale: 1.1 }}
                                        viewport={{ margin: "-45% 0px -45% 0px", once: false }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col pt-2">
                                        <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900">
                                            {service.title}
                                        </h3>
                                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
                                            {service.description}
                                        </p>
                                        <a 
                                            href="#" 
                                            className="mt-4 inline-block w-fit text-sm font-bold uppercase tracking-wider text-slate-900 underline decoration-slate-300 decoration-2 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600"
                                        >
                                            Ver más
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


