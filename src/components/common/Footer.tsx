import { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import { ScheduleCallModal } from './ScheduleCallModal';

// Icons
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);



export const Footer: FC = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  return (
    <footer className="w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
        
        {/* 1) Banda superior CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-3xl bg-white border border-slate-200 px-6 md:px-10 py-8 md:py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left"
        >
          <div className="flex-1">
            <h3 className="text-slate-900 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight md:whitespace-nowrap">
              ¿Listos para potenciar su marca? Nosotros también.
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsScheduleModalOpen(true)}
            className="w-full md:w-auto min-w-[260px] inline-flex items-center justify-center gap-3 rounded-2xl px-10 md:px-14 py-5 md:py-6 text-base md:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-teal-400 shadow-lg shadow-cyan-400/30 transition-all cursor-pointer"
          >
            <PhoneIcon />
            <span>Agendar una llamada</span>
          </motion.button>
        </motion.div>

        {/* 2) Bloque principal (Grid) */}
        <div className="mt-6 md:mt-8 grid gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* 2.1 Tarjeta Izquierda - Marca */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10 flex items-center justify-center min-h-[300px] md:min-h-[400px]"
          >
            <img 
              src="/icon/logovizion.svg" 
              alt="Vizion Logo" 
              className="w-full max-w-[420px] md:max-w-[620px] h-auto object-contain"
            />
          </motion.div>

          {/* 2.2 Tarjeta Derecha - Navegación */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-white border border-slate-200 p-8 md:p-10 flex flex-col justify-between gap-10"
          >
            {/* Badge */}
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-slate-700 border border-slate-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible para nuevos proyectos
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4">
              {/* Col 1 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Servicios</h4>
                <ul className="flex flex-col gap-2.5">
                  {['Producción', 'Desarrollo Web', 'Sistemas', 'Consultoría'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm text-slate-800 hover:text-cyan-500 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Estudio</h4>
                <ul className="flex flex-col gap-2.5">
                  {['Work', 'Nosotros', 'Proceso', 'Carreras'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm text-slate-800 hover:text-cyan-500 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Social</h4>
                <ul className="flex flex-col gap-2.5">
                  {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm text-slate-800 hover:text-cyan-500 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Strip */}
            <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
              <span>© 2025 Vizion Studio. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-slate-900 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Términos</a>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
      
      <ScheduleCallModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
