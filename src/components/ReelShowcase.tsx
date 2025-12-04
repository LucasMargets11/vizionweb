import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState, type FC } from 'react'

const PROJECTS = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: '/reelshowcase/vizion.png',
    alt: `Project ${i + 1}`
}))

const ReelShowcase: FC = () => {
    const [isReelOpen, setIsReelOpen] = useState(false)

    // Duplicamos los items para asegurar un loop fluido
    const items = [...PROJECTS, ...PROJECTS, ...PROJECTS]

    // Manejo de tecla ESC para cerrar el modal y bloqueo de scroll
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsReelOpen(false)
        }
        window.addEventListener('keydown', handleEsc)

        if (isReelOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0px'
        }

        return () => {
            window.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0px'
        }
    }, [isReelOpen])

    return (
        <section className="bg-white py-12 md:py-20 overflow-hidden">
            <style>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
            `}</style>
            <div className="relative grid w-full gap-6">
                {/* Top Cards Row */}
                <div className="h-60 md:h-80 overflow-hidden w-full col-start-1 row-start-1">
                    <div
                        className="flex gap-4 pl-4 h-full"
                        style={{
                            animation: 'marquee-left 20s linear infinite',
                            animationPlayState: isReelOpen ? 'paused' : 'running'
                        }}
                    >
                        {items.map((project, idx) => (
                            <div
                                key={`top-${idx}`}
                                className="aspect-[4/3] h-full w-auto shrink-0 overflow-hidden rounded-[30px]"
                            >
                                <img
                                    src={project.src}
                                    alt={project.alt}
                                    className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Cards Row */}
                <div className="h-60 md:h-80 overflow-hidden w-full col-start-1 row-start-2">
                    <div
                        className="flex gap-4 pl-4 h-full"
                        style={{
                            animation: 'marquee-right 20s linear infinite',
                            animationPlayState: isReelOpen ? 'paused' : 'running'
                        }}
                    >
                        {items.map((project, idx) => (
                            <div
                                key={`bottom-${idx}`}
                                className="aspect-[4/3] h-full w-auto shrink-0 overflow-hidden rounded-[30px]"
                            >
                                <img
                                    src={project.src}
                                    alt={project.alt}
                                    className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Centered Play Button (Overlay) */}
                <motion.button
                    onClick={() => setIsReelOpen(true)}
                    className="col-start-1 row-start-1 row-span-2 place-self-center flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-white shadow-xl text-[9px] md:text-[10px] font-semibold tracking-[0.25em] uppercase z-20 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    PLAY VIDEO
                </motion.button>
            </div>

            {/* HUD Modal Overlay */}
            <AnimatePresence>
                {isReelOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
                        onClick={() => setIsReelOpen(false)}
                    >
                        {/* HUD Panel Container */}
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Evita cerrar al clickear dentro del panel
                        >
                            {/* HUD Header */}
                            <div className="relative flex items-center justify-between px-6 py-4">
                                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                                    <span className="text-sm font-bold tracking-[0.3em] text-slate-900">
                                        VIZION REEL
                                    </span>
                                    <span className="hidden text-xs font-medium tracking-widest text-slate-500 md:block">
                                        MOTION · WEB · BRANDING
                                    </span>
                                </div>

                                <div className="flex items-center gap-6">
                                    {/* Data Cluster */}
                                    <div className="hidden items-center gap-4 text-[10px] font-mono text-slate-500 md:flex">
                                        <div className="flex flex-col items-end">
                                            <span className="text-slate-900 font-bold">DUR</span>
                                            <span>01:24</span>
                                        </div>
                                        <div className="h-6 w-px bg-slate-200" />
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setIsReelOpen(false)}
                                        className="group flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:bg-slate-50 hover:border-slate-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-slate-400 transition-colors group-hover:text-slate-900"
                                        >
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Video Area */}
                            <div className="relative aspect-video w-full bg-slate-100">
                                {/* Placeholder / Video Player */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="h-16 w-16 animate-pulse rounded-full border-2 border-slate-300 bg-slate-200" />
                                        <span className="font-mono text-xs tracking-[0.2em] text-slate-400">
                                            LOADING VIDEO...
                                        </span>
                                    </div>
                                </div>
                                {/* Aquí iría el tag <video> real:
                                <video src="/reel.mp4" controls className="h-full w-full object-cover" />
                                */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ReelShowcase
