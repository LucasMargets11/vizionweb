import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, type FC } from 'react'

const CustomCursor: FC = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    // Motion values for smooth movement
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Spring physics for delay/smoothness
    // High stiffness for tracking, high damping to prevent bouncing (rigid feel)
    const springConfig = { damping: 60, stiffness: 1000 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        // Only enable on devices with fine pointer (mouse)
        const mediaQuery = window.matchMedia('(pointer: fine)')
        
        if (mediaQuery.matches) {
            setIsVisible(true)
        }

        const moveCursor = (e: MouseEvent) => {
            // Center the 32px cursor (subtract half width/height = 16)
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)


        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check if hovering over interactive elements
            if (target.closest('a, button, [role="button"], input, select, textarea, .cursor-hover')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        if (mediaQuery.matches) {
            window.addEventListener('mousemove', moveCursor)
            window.addEventListener('mousedown', handleMouseDown)
            window.addEventListener('mouseup', handleMouseUp)
            window.addEventListener('mouseover', handleMouseOver)
        }

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [cursorX, cursorY])

    if (!isVisible) return null

    return (
        <>
            {/* Global style to hide default cursor only on fine pointer devices */}
            <style>{`
                @media (pointer: fine) {
                    body, a, button, input, select, textarea {
                        cursor: none !important;
                    }
                }
            `}</style>

            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    // Gradient: Blue (Left) -> Teal (Right)
                    background: 'linear-gradient(to right, #2563EB, #2DD4BF)',
                    // Mask to create the ring effect - Thicker ring (smaller transparent center)
                    maskImage: 'radial-gradient(circle at center, transparent 50%, black 52%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, transparent 50%, black 52%)',
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    rotate: isHovering ? 180 : 0, // Subtle rotation on hover
                }}
                transition={{
                    scale: { type: 'spring', stiffness: 400, damping: 25 },
                    rotate: { duration: 0.5, ease: 'easeInOut' }
                }}
            />
        </>
    )
}

export default CustomCursor
