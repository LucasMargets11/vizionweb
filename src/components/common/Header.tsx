import { useState, type FC } from 'react'
import { ScheduleCallModal } from './ScheduleCallModal'

const NAV_LINKS = [
    { label: 'SERVICES', href: '/servicios' },
    { label: 'PRICING', href: '/pricing' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'ABOUT', href: '/about' },
]

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

    return (
        <>
            <header className="bg-white">
                <div className="flex w-full items-start justify-between px-6 py-6 md:px-12">
                    <a href="/" className="flex items-center pt-1">
                        <img src="/icon/logovizion.svg" alt="Vizion Studio" className="h-10 w-auto md:h-14" />
                    </a>

                    <div className="hidden items-start gap-8 md:flex">
                        <button
                            onClick={() => setIsScheduleModalOpen(true)}
                            className="hidden md:inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_10px_20px_rgba(0,87,255,0.25)] hover:bg-blue-700 transition"
                        >
                            SCHEDULE A CALL
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                                <path d="m22 8-6 4 6 4V8Z"/>
                                <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
                            </svg>
                        </button>
                        <nav className="hidden flex-col items-start text-left text-xs font-bold tracking-[0.15em] uppercase leading-loose gap-1 md:flex mr-8">
                            {NAV_LINKS.map((link) => (
                                <a key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-900 md:hidden"
                        aria-label="Abrir menú"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span className="sr-only">Abrir menú</span>
                        <span className="flex flex-col gap-1">
                            <span className="block h-0.5 w-5 bg-slate-900" />
                            <span className="block h-0.5 w-5 bg-slate-900" />
                            <span className="block h-0.5 w-5 bg-slate-900" />
                        </span>
                    </button>
                </div>

                <div className={`${isMenuOpen ? 'max-h-60' : 'max-h-0'} overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 md:hidden`}>
                    <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="py-1 transition-colors hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setIsMenuOpen(false)
                                setIsScheduleModalOpen(true)
                            }}
                            className="rounded-full bg-blue-600 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white w-full"
                        >
                            Schedule a call
                        </button>
                    </nav>
                </div>
            </header>

            <ScheduleCallModal 
                isOpen={isScheduleModalOpen} 
                onClose={() => setIsScheduleModalOpen(false)} 
            />
        </>
    )
}

export default Header
