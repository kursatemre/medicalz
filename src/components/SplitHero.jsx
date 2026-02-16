import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  HeartPulse,
  ArrowRight,
  Shield,
  Award,
} from 'lucide-react';

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <section
      id="anasayfa"
      className="relative h-dvh min-h-150 flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Left Side - Products */}
      <motion.div
        className={`relative flex items-center justify-center cursor-pointer transition-all duration-700 ease-out
          h-[50dvh] min-h-75 lg:h-auto
          ${hoveredSide === 'right' ? 'lg:flex-[0.4]' : hoveredSide === 'left' ? 'lg:flex-[0.6]' : 'lg:flex-[0.5]'}
        `}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80"
            alt="Nükleer Tıp Cihazları"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-br from-navy-dark/95 via-navy/85 to-navy-dark/90" />
        </div>

        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-16 max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <Shield size={12} className="text-accent" />
              <span className="text-[10px] sm:text-xs font-medium text-white/80 uppercase tracking-wider">
                15+ Yıllık Deneyim
              </span>
            </div>

            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Atom className="text-white" size={24} />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Nükleer Tıp Ürünleri
            </h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-5 sm:mb-8 leading-relaxed max-w-md mx-auto">
              Radyoaktif kalibrasyon kaynakları, radyasyon ölçüm sistemleri,
              radyofarmasötik sentez cihazları ve daha fazlası.
            </p>

            <motion.a
              href="#urunler"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-navy px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm active:bg-slate-100 transition-colors group"
            >
              Ürünleri İncele
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
      </motion.div>

      {/* Right Side - Solutions */}
      <motion.div
        className={`relative flex items-center justify-center cursor-pointer transition-all duration-700 ease-out
          h-[50dvh] min-h-75 lg:h-auto
          ${hoveredSide === 'left' ? 'lg:flex-[0.4]' : hoveredSide === 'right' ? 'lg:flex-[0.6]' : 'lg:flex-[0.5]'}
        `}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80"
            alt="Radyasyon Zırhlama Çözümleri"
            className="w-full h-full object-cover object-[center_40%]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-bl from-slate-900/95 via-slate-800/85 to-slate-900/90" />
        </div>

        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-16 max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <Award size={12} className="text-accent" />
              <span className="text-[10px] sm:text-xs font-medium text-white/80 uppercase tracking-wider">
                Anahtar Teslim Çözümler
              </span>
            </div>

            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <HeartPulse className="text-accent" size={24} />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Çözümler & Hizmetler
            </h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-5 sm:mb-8 leading-relaxed max-w-md mx-auto">
              Radyasyon zırhlama, İyot-131 tank sistemleri kurulumu,
              bakım-onarım ve NDK uyumlu proje hizmetleri.
            </p>

            <motion.a
              href="#cozumler"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-accent text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm active:bg-accent-dark transition-colors group"
            >
              Çözümleri Keşfedin
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
