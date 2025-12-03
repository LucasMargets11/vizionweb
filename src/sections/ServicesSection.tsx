import type { FC } from 'react'

const SERVICES = [
    'Dirección creativa y branding',
    'Diseño y prototipado de interfaces',
    'Desarrollo web front-end a medida',
    'Experiencias inmersivas y motion',
    'Optimización y analytics',
    'Consultoría de producto digital',
]

export const ServicesSection: FC = () => {
    return (
        <section id="services" className="min-h-screen px-6">
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10">
                <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Servicios</p>
                    <h2 className="text-3xl font-semibold sm:text-4xl">Lo que construimos</h2>
                    <p className="text-base text-slate-400">
                        Lista preliminar para estructurar el contenido. Cada ítem se podrá
                        expandir con casos, métricas o CTAs específicos.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {SERVICES.map((service) => (
                        <div
                            key={service}
                            className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur"
                        >
                            <p className="text-lg font-medium">{service}</p>
                            <p className="mt-2 text-sm text-slate-400">
                                Placeholder descriptivo para profundizar en el servicio.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
