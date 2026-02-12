import { motion } from 'framer-motion';
import {
  Wrench,
  GraduationCap,
  PhoneCall,
  Settings,
  ClipboardCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Komisyonlama & Kurulum',
    desc: 'Tibbi cihazlarinizin uluslararasi protokollere uygun sekilde kurulumu ve devreye alma hizmeti.',
    features: ['IAEA TRS-398 Protokolu', 'Isik ve Radyasyon Alan Dogrulama', 'Dokumantasyon'],
  },
  {
    icon: Wrench,
    title: 'Kalibrasyon Hizmetleri',
    desc: 'Akredite laboratuvarimizda veya sahada periyodik kalibrasyon ve bakim hizmetleri.',
    features: ['TURKAK Akredite', 'Izlenebilir Standartlar', 'Sertifikali Raporlama'],
  },
  {
    icon: GraduationCap,
    title: 'Egitim Programlari',
    desc: 'Medikal fizikci ve teknisyenler icin teorik ve uygulamali egitim programlari.',
    features: ['Kisisellestirilmis Mufredat', 'Uygulamali Atolveler', 'Online Platform'],
  },
  {
    icon: ClipboardCheck,
    title: 'Kalite Guvence Danismanligi',
    desc: 'Radyoterapi merkezleri icin kapsamli QA programi tasarimi ve denetim hizmeti.',
    features: ['QA Protokol Tasarimi', 'Yillik Denetim', 'Uyumluluk Raporlari'],
  },
  {
    icon: PhoneCall,
    title: 'Teknik Destek',
    desc: '7/24 uzaktan ve yerinde teknik destek ile kesintisiz operasyon guvencesi.',
    features: ['7/24 Erisim', 'Uzaktan Baglanti', '4 Saat Mudahale Suresi'],
  },
  {
    icon: TrendingUp,
    title: 'Performans Optimizasyonu',
    desc: 'Mevcut ekipmanlarinizin verimliligi ve doz hassasiyetini artirma danismanligi.',
    features: ['Benchmark Analizi', 'Optimizasyon Raporu', 'Takip Denetimi'],
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Hizmetlerimiz
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Uzman Muhendislik Hizmetleri
          </h2>
          <p className="text-slate-medium max-w-2xl mx-auto">
            Satis sonrasi tam destek. Komisyonlamadan kalibrasyona, egitimden
            teknik desstege kadar yaninizdayiz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-navy/10 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-navy/5 group-hover:bg-navy group-hover:shadow-lg group-hover:shadow-navy/20 rounded-xl flex items-center justify-center mb-5 transition-all">
                <service.icon
                  size={22}
                  className="text-navy group-hover:text-white transition-colors"
                />
              </div>

              <h3 className="text-lg font-bold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                {service.desc}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-xs text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#iletisim"
                className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent transition-colors group/link"
              >
                Detayli Bilgi
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
