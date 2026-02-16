import { motion } from 'framer-motion';
import { Target, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { value: '80+', label: 'Ürün Çeşidi', icon: Target },
  { value: '9', label: 'Ürün Kategorisi', icon: Users },
  { value: '15+', label: 'Yıllık Deneyim', icon: TrendingUp },
  { value: '81', label: 'İlde Hizmet', icon: Globe },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 sm:mb-3">
              Hakkımızda
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 sm:mb-6 leading-tight">
              Nükleer Tıp'ta{' '}
              <span className="text-accent">Çözüm Ortağınız</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Picorad Medikal, 15 yılı aşkın sektör deneyimi ile Türkiye'de
                nükleer tıp cihazları, radyasyon ölçüm sistemleri ve
                radyofarmasötik üretim ekipmanları alanında öncü bir kuruluştur.
              </p>
              <p>
                Önceliğimiz, ürünlerimiz ile hastaların tedavi kalitesini
                iyileştirmektir. Müşteri odaklı yaklaşımımız, güven, tecrübe ve
                yeni teknoloji değerlerimiz ile sektörde fark yaratıyoruz.
              </p>
              <p>
                Radyoaktif kalibrasyon kaynaklarından radyasyon zırhlama
                çözümlerine, İyot-131 tank sistemlerinden radyofarmasötik
                sentez cihazlarına kadar geniş ürün yelpazemiz ile hastanelere
                ve araştırma merkezlerine anahtar teslim çözümler sunuyoruz.
              </p>
            </div>

            {/* Value pillars */}
            <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
              {['Müşteri Odaklı', 'Güven', 'Tecrübe', 'Yeni Teknoloji'].map((v, i) => (
                <span key={i} className="text-xs font-medium bg-navy/5 text-navy px-3 py-1.5 rounded-full">
                  {v}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-4 sm:p-6 text-center border border-slate-100 hover:border-navy/10 hover:shadow-lg active:bg-slate-100 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon size={20} className="text-navy" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-navy">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 rounded-2xl overflow-hidden h-40 sm:h-48">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80"
                alt="Nükleer Tıp Laboratuvarı"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
