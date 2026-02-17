import { useState } from 'react';
import { motion } from 'framer-motion';
import { Atom, ArrowRight, Radiation, ShieldCheck } from 'lucide-react';

export default function SplitEntry() {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="h-dvh w-full flex flex-col lg:flex-row overflow-hidden relative">
      {/* ===== Floating Logo ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2"
      >
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
          <Atom className="text-white" size={20} />
        </div>
        <div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-lg">
            Pico<span className="text-accent">Rad</span>
          </span>
          <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-white/60">
            Medikal
          </p>
        </div>
      </motion.div>

      {/* ===== Left Side - Radyoaktif Kalibrasyon Kaynakları ===== */}
      <motion.a
        href="#"
        className={`relative flex items-center justify-center cursor-pointer transition-all duration-700 ease-out group
          h-[50dvh] lg:h-auto
          ${hoveredSide === 'right' ? 'lg:flex-[0.38]' : hoveredSide === 'left' ? 'lg:flex-[0.62]' : 'lg:flex-[0.5]'}
        `}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1400&q=80"
            alt="Radyoaktif Kalibrasyon Kaynakları"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-br from-navy-dark/95 via-navy/80 to-navy-dark/90 transition-opacity duration-500 group-hover:from-navy-dark/90 group-hover:via-navy/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 sm:px-10 lg:px-16 max-w-lg w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-14 h-14 sm:w-18 sm:h-18 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-7 border border-white/10 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-500">
              <Radiation className="text-white" size={28} />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Radyoaktif Kalibrasyon Kaynakları
            </h2>
            <p className="text-white/60 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-sm mx-auto">
              PET-CT, PET-MR ve doz kalibratörleri için yüksek kaliteli radyoaktif kaynaklar.
            </p>

            <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
              Keşfet
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </span>
          </motion.div>
        </div>

        {/* Desktop divider */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/20 to-transparent z-20" />
        {/* Mobile divider */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent z-20" />
      </motion.a>

      {/* ===== Right Side - Radyasyon Koruyunum ve Ölçüm Sistemleri ===== */}
      <motion.a
        href="#"
        className={`relative flex items-center justify-center cursor-pointer transition-all duration-700 ease-out group
          h-[50dvh] lg:h-auto
          ${hoveredSide === 'left' ? 'lg:flex-[0.38]' : hoveredSide === 'right' ? 'lg:flex-[0.62]' : 'lg:flex-[0.5]'}
        `}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1400&q=80"
            alt="Radyasyon Koruyunum ve Ölçüm Sistemleri"
            className="w-full h-full object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-bl from-slate-900/95 via-slate-800/80 to-slate-900/90 transition-opacity duration-500 group-hover:from-slate-900/90 group-hover:via-slate-800/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 sm:px-10 lg:px-16 max-w-lg w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-14 h-14 sm:w-18 sm:h-18 bg-accent/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-7 border border-accent/20 group-hover:bg-accent/25 group-hover:border-accent/30 transition-all duration-500">
              <ShieldCheck className="text-accent" size={28} />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Radyasyon Koruyunum & Ölçüm Sistemleri
            </h2>
            <p className="text-white/60 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-sm mx-auto">
              Radyasyon ölçüm cihazları, koruyucu ekipmanlar ve zırhlama çözümleri.
            </p>

            <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
              Keşfet
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </span>
          </motion.div>
        </div>
      </motion.a>
    </div>
  );
}
