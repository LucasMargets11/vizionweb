import type { FC } from 'react'

export const AboutSection: FC = () => {
    return (
        <section id="about" className="min-h-screen px-6">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-6">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Manifiesto</p>
                <h2 className="text-3xl font-semibold sm:text-4xl">¿Quién es VIZION?</h2>
                <p className="text-lg text-slate-300">
                    VIZION es un estudio creativo enfocado en construir experiencias digitales
                    inmersivas. Integramos estrategia, tecnología y storytelling para
                    traducir la esencia de cada marca en interfaces memorables.
                </p>
                <p className="text-base text-slate-400">
                    Este bloque es un placeholder. Más adelante conectaremos datos reales,
                    casos y testimonios que respalden nuestro enfoque.
                </p>
            </div>
        </section>
    )
}
