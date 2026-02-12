import { motion } from 'framer-motion';
import { Target, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { value: '40+', label: 'Urun Cesidi', icon: Target },
  { value: '150+', label: 'Kurumsal Musteri', icon: Users },
  { value: '12', label: 'Ulkede Hizmet', icon: Globe },
  { value: '25+', label: 'Yillik Deneyim', icon: TrendingUp },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Hakkimizda
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6 leading-tight">
              Tibbi Radyasyon Teknolojilerinde
              <br />
              <span className="text-accent">Guvenilir Cozum Ortaginiz</span>
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                MedicalZ, 25 yili askin sektordeki deneyimi ile Turkiye ve
                bolge ulkelerinde tibbi cihaz, radyasyon olcum sistemleri ve
                dozimetri cozumleri alaninda oncu bir kurulustur.
              </p>
              <p>
                Dunyanin onde gelen uretici firmalari ile resmi distributorluk
                anlasmalarina sahip sirketimiz, hastanelere, arastirma
                merkezlerine ve endustriyel tesislere uluslararasi standartlarda
                urunler ve muhendislik hizmetleri sunmaktadir.
              </p>
              <p>
                ISO 13485 kalite yonetim sistemimiz ve TURKAK akredite kalibrasyon
                laboratuvarimiz ile sektorde referans noktasi olmaya devam
                ediyoruz.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-navy/10 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={22} className="text-navy" />
                  </div>
                  <p className="text-3xl font-bold text-navy">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <div className="mt-6 rounded-2xl overflow-hidden h-48">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80"
                alt="Laboratuvar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
