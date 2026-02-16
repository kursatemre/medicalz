import { motion } from 'framer-motion';
import {
  Wrench,
  ShieldCheck,
  Container,
  FileCheck,
  HardHat,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'İyot-131 Bakım & Onarım',
    desc: 'Radyoiyot tedavi ünitelerinin periyodik bakım, arıza tespiti ve onarım hizmetleri. Türkiye genelinde servis ağı.',
    features: ['Sistem Kontrolü', 'Tank Temizliği', 'Pompa Kontrolü', 'Pano Bakımı'],
  },
  {
    icon: ShieldCheck,
    title: 'Radyasyon Zırhlama',
    desc: 'NCRP 49 ve 147 standartlarına uygun kurşun zırhlama tasarımı ve uygulaması. 15+ yıllık deneyim.',
    features: ['Kurşun Zırhlama Montajı', 'NCRP Hesaplamaları', 'Maksimum Alan Tasarrufu'],
  },
  {
    icon: Container,
    title: 'İyot-131 Tank Sistemleri Kurulumu',
    desc: 'NDK onaylı radyoaktif atık su tank sistemlerinin projelendirme, kurulum ve devreye alma hizmeti.',
    features: ['PLC Uzaktan İzleme', 'Sensörlü Taşma Önleme', 'NDK Uyumlu Spesifikasyon'],
  },
  {
    icon: FileCheck,
    title: 'Proje & Lisanslama',
    desc: 'Yatan hasta tedavi üniteleri için NDK uyumlu proje hazırlama ve lisanslama süreç yönetimi.',
    features: ['NDK Proje Hazırlama', 'Lisanslama Desteği', 'Anahtar Teslim Çözüm'],
  },
  {
    icon: HardHat,
    title: 'Anahtar Teslim Kurulum',
    desc: 'Nükleer tıp departmanları için komple altyapı kurulumu: zırhlama, tank sistemi, ekipman montajı.',
    features: ['Komple Altyapı', 'Ekipman Montajı', 'Devreye Alma & Test'],
  },
  {
    icon: Wrench,
    title: 'PLC Uzaktan İzleme',
    desc: 'Tank doluluk seviyeleri ve sistem durumunun PLC tabanlı uzaktan izlenmesi. Anlık alarm bildirimi.',
    features: ['Uzaktan Erişim', 'Anlık Alarm', 'Periyodik Raporlama'],
  },
];

export default function Services() {
  return (
    <section id="cozumler" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 sm:mb-3">
            Çözümlerimiz
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 sm:mb-4">
            Mühendislik Çözümleri & Hizmetler
          </h2>
          <p className="text-sm sm:text-base text-slate-medium max-w-2xl mx-auto">
            Radyasyon zırhlama, İyot-131 tank sistemleri ve bakım-onarım
            hizmetleri ile anahtar teslim çözümler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-5 sm:p-7 border border-slate-100 hover:border-navy/10 hover:shadow-xl active:bg-slate-50 transition-all"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-navy/5 group-hover:bg-navy group-hover:shadow-lg group-hover:shadow-navy/20 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-all">
                <service.icon size={20} className="text-navy group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-navy mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-5 leading-relaxed">{service.desc}</p>

              <ul className="space-y-2 mb-5 sm:mb-6">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#iletisim" className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent active:text-accent-dark transition-colors group/link">
                Detaylı Bilgi
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
