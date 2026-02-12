import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  HeartPulse,
  ArrowRight,
  Shield,
  Award,
} from 'lucide-react';

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <section id="anasayfa" className="relative h-screen min-h-[700px] flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Medical Devices */}
      <motion.div
        className={`relative flex-1 flex items-center justify-center cursor-pointer transition-all duration-700 ease-out ${
          hoveredSide === 'right' ? 'lg:flex-[0.4]' : hoveredSide === 'left' ? 'lg:flex-[0.6]' : 'lg:flex-[0.5]'
        }`}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80"
            alt="Tibbi Cihazlar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 lg:px-16 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield size={14} className="text-accent" />
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                ISO 13485 Sertifikali
              </span>
            </div>

            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="text-white" size={32} />
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
              Tibbi Cihazlar
            </h2>
            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed">
              Radyoterapi dozimetri, radyasyon olcum ve nukleer tip alaninda
              uluslararasi standartlarda 40'tan fazla urun.
            </p>

            <motion.a
              href="#urunler"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-navy px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-medical-white transition-colors group"
            >
              Urunleri Incele
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>

      {/* Right Side - Services */}
      <motion.div
        className={`relative flex-1 flex items-center justify-center cursor-pointer transition-all duration-700 ease-out ${
          hoveredSide === 'left' ? 'lg:flex-[0.4]' : hoveredSide === 'right' ? 'lg:flex-[0.6]' : 'lg:flex-[0.5]'
        }`}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80"
            alt="Saglik Hizmetleri"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 lg:px-16 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award size={14} className="text-accent" />
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                Uzman Kadro
              </span>
            </div>

            <div className="w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HeartPulse className="text-accent" size={32} />
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
              Uzman Saglik Hizmetleri
            </h2>
            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed">
              Komisyonlama, kalibrasyon, egitim ve teknik destek hizmetleri
              ile kesintisiz operasyonel verimlilik.
            </p>

            <motion.a
              href="#hizmetler"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-colors group"
            >
              Hizmetleri Kesfedin
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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
