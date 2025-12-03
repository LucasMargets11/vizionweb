import type { FC, FormEvent } from 'react'

export const ContactSection: FC = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <section id="contact" className="min-h-screen px-6 pb-24">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-8">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Contacto</p>
                    <h2 className="text-3xl font-semibold sm:text-4xl">Contanos tu proyecto</h2>
                    <p className="text-base text-slate-400">
                        Formulario base sin lógica aún. Lo conectaremos a un backend o servicio
                        de automatización durante la siguiente etapa.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm uppercase tracking-wide text-slate-300">
                            Nombre
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="rounded-md border border-white/10 bg-slate-900/50 px-4 py-3 text-base text-white focus:border-violet-300 focus:outline-none"
                            placeholder="Tu nombre o empresa"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm uppercase tracking-wide text-slate-300">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="rounded-md border border-white/10 bg-slate-900/50 px-4 py-3 text-base text-white focus:border-violet-300 focus:outline-none"
                            placeholder="contacto@vizion.studio"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm uppercase tracking-wide text-slate-300">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="rounded-md border border-white/10 bg-slate-900/50 px-4 py-3 text-base text-white focus:border-violet-300 focus:outline-none"
                            placeholder="Contanos sobre objetivos, timing y referencias."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-full bg-violet-500 px-6 py-3 text-center text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-violet-400"
                    >
                        Enviar brief
                    </button>
                </form>
            </div>
        </section>
    )
}
