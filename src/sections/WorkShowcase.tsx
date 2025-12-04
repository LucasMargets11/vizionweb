import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type FC } from 'react'

const WorkCard: FC = () => {
    return (
        <div className="relative aspect-[1/1.15] w-full overflow-hidden rounded-[3rem] bg-[#CFA6FF]">
            {/* Placeholder for future image */}
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
