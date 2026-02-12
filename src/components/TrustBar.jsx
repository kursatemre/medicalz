import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Globe,
  BadgeCheck,
  FileCheck,
  Building2,
} from 'lucide-react';

const certifications = [
  { icon: Shield, label: 'ISO 13485', desc: 'Tibbi Cihaz Kalite Yonetimi' },
  { icon: BadgeCheck, label: 'CE Isareti', desc: 'Avrupa Uygunluk Belgesi' },
  { icon: FileCheck, label: 'IEC 61217', desc: 'Radyoterapi Ekipman Standardi' },
  { icon: Award, label: 'TURKAK', desc: 'Akreditasyon Belgesi' },
  { icon: Globe, label: 'IAEA', desc: 'Uluslararasi Atom Enerjisi Ajansi' },
  { icon: Building2, label: 'TAEK', desc: 'Turkiye Atom Enerjisi Kurumu' },
];

export default function TrustBar() {
  return (
    <section className="py-10 sm:py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-1.5 sm:mb-2">
            Guven & Kalite
          </p>
          <h3 className="text-base sm:text-lg font-semibold text-navy">
            Uluslararasi Sertifikalar ve Akreditasyonlar
          </h3>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group text-center p-3 sm:p-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-navy/5 group-hover:bg-navy/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-colors">
                <cert.icon size={18} className="text-navy sm:hidden" />
                <cert.icon size={22} className="text-navy hidden sm:block" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-navy">{cert.label}</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 leading-snug">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
