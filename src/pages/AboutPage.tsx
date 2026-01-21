import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Header from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { RobotModel, Loader } from '../components/RobotModel';
import { t } from '../i18n';

// Toggle to re-enable the 3D robot on the About page when needed
const SHOW_ABOUT_PAGE_ROBOT = false;

export const AboutPage: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const paragraphs = [
    t('pages.about.paragraphs.first'),
    t('pages.about.paragraphs.second'),
    t('pages.about.paragraphs.third'),
  ];
  const tagKeys = ['production', 'development', 'consulting'] as const;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="relative">
        {/* Background Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,_rgba(148,163,184,0.15)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.15)_1px,_transparent_1px)] bg-[size:40px_40px]"
        />

        <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                {t('pages.about.title')}
              </h1>

              <div className="mt-4 space-y-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-700">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 h-px w-full bg-slate-200" />

              <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm text-slate-600">
                {tagKeys.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">
                    {t(`pages.about.tags.${tag}`)}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Column: 3D Card */}
            {SHOW_ABOUT_PAGE_ROBOT && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="flex justify-center lg:justify-end mt-10 lg:mt-0"
              >
                <div
                  className="relative w-full max-w-md aspect-square rounded-3xl border border-slate-200/70 bg-white/80 shadow-xl shadow-slate-200/60 backdrop-blur-md overflow-hidden"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Canvas
                    camera={{ position: [0, 0, 4.5], fov: 45 }}
                    className="w-full h-full"
                  >
                    <Suspense fallback={<Loader />}>
                      <ambientLight intensity={0.7} />
                      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                      <pointLight position={[-10, -10, -10]} intensity={0.5} />

                      <RobotModel isHovering={isHovering} />

                      <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 1.8}
                      />
                    </Suspense>
                  </Canvas>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
