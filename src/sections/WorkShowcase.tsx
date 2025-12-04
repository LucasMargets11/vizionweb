import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type FC } from 'react'

const WorkCard: FC = () => {
    return (
        <div className="group relative aspect-[1/1.35] w-full overflow-hidden rounded-[3rem] bg-[#CFA6FF]">
            {/* Background Image with Zoom & Blur on Hover */}
            <div className="absolute inset-0 h-full w-full transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm">
                {/* Placeholder Image - Replace src with real project image */}
                <img 
                    src="/reelshowcase/vizion.png" 
                    alt="Project Preview" 
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Tags Container - Appears on Hover */}
            <div className="absolute left-6 top-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                    Discovery & Strategy
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                    Web Design
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                    UI / UX
                </span>
            </div>

            {/* View Project Button - Centered */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 shadow-xl">
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-900">
                        View Project
                    </span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-slate-900"
                    >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export const WorkShowcase: FC = () => {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    })

    // Ajustamos el desplazamiento horizontal. 
    // Reducimos un poco el ancho de las cards para asegurar que entren 2 en el contenedor.
    // Ancho card: 400px | Gap: 48px
    // Desplazamiento para mover 2 cards: (400 + 48) * 2 = 896px
    // Agregamos "zonas muertas" al inicio y final (0-15% y 85-100%) para pausar la animación
    const x = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "-900px"])

    return (
        <section ref={targetRef} className="relative w-full bg-white">
            
            {/* MOBILE LAYOUT (Default vertical stack) */}
            <div className="block py-24 px-6 md:hidden">
                <h2 className="mb-12 text-left text-4xl font-extrabold uppercase tracking-tight text-slate-900">
                    Nuestros Trabajos
                </h2>
                <div className="flex flex-col gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <WorkCard key={i} />
                    ))}
                </div>
            </div>

            {/* DESKTOP LAYOUT (Horizontal Scroll) */}
            <div className="hidden h-[450vh] md:block">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6">
                    <div className="mx-auto flex w-full max-w-[90rem] items-center gap-20">
                        
                        {/* Title Section */}
                        <div className="w-1/3 shrink-0 pl-8">
                            <h2 className="text-left text-5xl font-extrabold uppercase tracking-tight text-slate-900 lg:text-6xl">
                                Nuestros<br />Trabajos
                            </h2>
                            <p className="mt-6 max-w-xs text-lg text-slate-500">
                                Una selección de proyectos donde la creatividad se encuentra con la tecnología.
                            </p>
                        </div>

                        {/* Horizontal Cards Track */}
                        <div className="w-2/3 overflow-hidden">
                            <motion.div 
                                style={{ x }} 
                                className="flex gap-12 pl-4"
                            >
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-[400px] shrink-0">
                                        <WorkCard />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
