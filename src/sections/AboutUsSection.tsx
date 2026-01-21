import React, { Suspense, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { t } from '../i18n';

// --- Content Configuration ---
const CONTENT = {
  eyebrow: "Sobre nosotros",
  title: "Creamos experiencias digitales vivas",
  description: "Somos un estudio audiovisual y de software que combina imagen, animación y desarrollo para potenciar marcas en el entorno digital.",
  bullets: [
    "Producción audiovisual de alto impacto.",
    "Desarrollo web y sistemas a medida.",
    "Estrategia creativa y soporte continuo."
  ],
  cta: "Conocer más sobre Vizion"
};

// Switch to true when the 3D robot should return to the About Us section
const SHOW_ABOUT_US_ROBOT = false;

// --- Robot Model Component ---
interface RobotModelProps {
  isHovering: boolean;
}

const RobotModel = ({ isHovering }: RobotModelProps) => {
  const { scene } = useGLTF('/3d/robotfollow.gltf');
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;

    // Calculate target rotation based on pointer position if hovering
    if (isHovering) {
      // state.pointer.x/y are normalized coordinates (-1 to 1)
      // Increase multiplier for more noticeable movement
      targetRotation.current.y = state.pointer.x * 0.8; // Increased from 0.5
      targetRotation.current.x = -state.pointer.y * 0.5; // Increased from 0.2
    } else {
      // Reset to neutral if not hovering
      targetRotation.current = { x: 0, y: 0 };
    }

    // Smooth interpolation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation.current.y,
      0.1
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      0.1
    );
  });

  return (
    <group
      ref={groupRef}
      position={[0, -1.0, 0]}
    >
      <primitive object={scene} scale={2.2} />
    </group>
  );
};

// --- Loader Component ---
const Loader = () => (
  <Html center>
    <div className="text-cyan-400 font-mono text-sm animate-pulse whitespace-nowrap">
      {t('common.loading.system')}
    </div>
  </Html>
);

// --- Main Section Component ---
const AboutUsSection: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center bg-[#02060A] overflow-hidden py-20">

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        {/* Radial Gradient behind robot (positioned right) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-left order-1"
          >
            {/* Eyebrow */}
            <span className="inline-block text-cyan-400 font-medium tracking-wider text-sm uppercase bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-900/50">
              {CONTENT.eyebrow}
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              {CONTENT.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              {CONTENT.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-4">
              {CONTENT.bullets.map((item, index) => (
                <li key={index} className="group flex items-center space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-6">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-300 rounded-full border border-cyan-500/30 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  {CONTENT.cta}
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: 3D Robot Card */}
          {SHOW_ABOUT_US_ROBOT && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-md mx-auto lg:max-w-none order-2"
            >
              <motion.div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl group"
              >
                {/* Card Border Gradient on Hover */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-500/30 transition-colors duration-500 pointer-events-none z-20" />

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-900/20 opacity-50 z-10 pointer-events-none" />

                <Canvas
                  camera={{ position: [0, 0, 6], fov: 45 }}
                  className="w-full h-full z-10"
                >
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
                  <directionalLight position={[-5, 0, -5]} intensity={0.8} color="#00ffff" />
                  <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.5} penumbra={1} color="#22d3ee" />

                  <Suspense fallback={<Loader />}>
                    <RobotModel isHovering={isHovering} />
                  </Suspense>

                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2 - 0.2}
                    maxPolarAngle={Math.PI / 2 + 0.2}
                    minAzimuthAngle={-0.5}
                    maxAzimuthAngle={0.5}
                  />
                </Canvas>
              </motion.div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
