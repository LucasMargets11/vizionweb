import type { FC } from 'react'

export const Footer: FC = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-white/10 bg-slate-900/70">
            <div className="mx-auto flex flex-col gap-2 px-6 py-8 text-center text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <p>© {year} VIZION Studio. Todos los derechos reservados.</p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-wide text-slate-400">
                    <span>Instagram</span>
                    <span>Behance</span>
                    <span>LinkedIn</span>
                </div>
            </div>
        </footer>
    )
}
