import { useState, type FC } from 'react'

const NAV_LINKS = [
    { label: 'SERVICES', href: '#services' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'PROJECTS', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
    { label: 'ABOUT', href: '#about' },
]

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-slate-100">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="/" className="flex items-center">
                    <img src="/icon/vizionblack.png" alt="Vizion Studio" className="h-6 w-auto md:h-7" />
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(0,87,255,0.35)] hover:bg-blue-700 transition"
                    >
                        SCHEDULE A CALL
                        <span className="flex h-5 w-8 items-center justify-center rounded-full border border-white/70 text-[9px]">
                            ▢
                        </span>
                    </a>
                    <nav className="hidden flex-col items-end text-right text-[11px] font-semibold tracking-[0.22em] uppercase leading-tight md:flex">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="hover:text-slate-500 transition-colors">
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
                    <a
                        href="#contact"
                        className="rounded-full bg-blue-600 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Schedule a call
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
