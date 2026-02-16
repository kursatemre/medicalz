import { motion } from 'framer-motion';
import {
  FileDown,
  Ruler,
  Thermometer,
  Weight,
  Zap,
  Gauge,
  Clock,
  Box,
  Mail,
  Radio,
} from 'lucide-react';

const specs = [
  { icon: Ruler, label: 'Dedektör', value: 'NaI Sintilasyon Prob' },
  { icon: Gauge, label: 'Enerji Çözünürlüğü', value: 'Çok Kanallı Analizör' },
  { icon: Zap, label: 'Ölçüm Tipi', value: 'Radyoiyot Uptake %' },
  { icon: Radio, label: 'Nüklidler', value: 'I-131, I-123, Tc-99m' },
  { icon: Thermometer, label: 'Çalışma Sıcaklığı', value: '15°C - 35°C' },
  { icon: Weight, label: 'Sınıf', value: 'Class IIb Tıbbi Cihaz' },
  { icon: Box, label: 'Çıkış', value: 'Dijital + Grafik Spektrum' },
  { icon: Clock, label: 'Bağlantı', value: 'USB, RS-232, Ethernet' },
];

export default function TechnicalDetail() {
  return (
    <section id="teknik" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 sm:mb-3">
            Teknik Bilgi
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 sm:mb-4">
            Ürün Teknik Özellikleri
          </h2>
          <p className="text-sm sm:text-base text-slate-medium max-w-2xl mx-auto">
            Her ürün, uluslararası standartları karşılayan hassas mühendislik ile üretilmiştir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-28 bg-linear-to-br from-navy to-navy-dark rounded-2xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 sm:mb-4">
                  Öne Çıkan Ürün
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  ISOMED 2162
                </h3>
                <p className="text-white/60 text-sm mb-1 font-mono">
                  Tiroid Uptake Sistemi
                </p>
                <p className="text-white/70 text-sm mt-3 sm:mt-4 leading-relaxed">
                  NaI sintilasyon problu, çok kanallı analizörlü Class IIb tıbbi cihaz.
                  Tiroid dokusundaki radyoiyot tutulumunu yüzde olarak ölçerek
                  tedavi planlamasına katkı sağlar.
                </p>
              </div>
              <div className="relative h-40 sm:h-52">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80"
                  alt="ISOMED 2162 Tiroid Uptake"
                  className="w-full h-full object-cover object-center opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy to-transparent" />
              </div>
              <div className="p-4 sm:p-6 space-y-2.5 sm:space-y-3">
                <motion.a
                  href="#iletisim"
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark active:bg-accent-dark text-white py-3.5 sm:py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  <Mail size={16} />
                  Teknik Bilgi Talep Edin
                </motion.a>
                <motion.a
                  href="/DOSE-PRO-X200-Datasheet.pdf"
                  download="Picorad-ISOMED-2162-Datasheet.pdf"
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 active:bg-white/25 text-white py-3.5 sm:py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  <FileDown size={16} />
                  PDF Datasheet İndir
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-8 mb-4 sm:mb-6">
              <h4 className="text-base sm:text-lg font-bold text-navy mb-5 sm:mb-6">
                Teknik Özellikler
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {specs.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center justify-between py-2.5 sm:py-3 border-b border-slate-200 last:border-0 gap-4"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                        <spec.icon size={15} className="text-navy" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-600 truncate">{spec.label}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-navy font-mono whitespace-nowrap">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { title: 'Tescilli Süreçler', desc: 'En tutarlı kalibrasyon kaynakları için tescilli üretim süreçleri.' },
                { title: 'Ömür Boyu Garanti', desc: 'Kalibrasyon kaynakları için ömür boyu üretici garantisi.' },
                { title: 'NDK Uyumlu', desc: 'Türkiye Nükleer Düzenleme Kurumu onaylı ürün ve çözümler.' },
                { title: 'Yerinde Kurulum', desc: 'Anahtar teslim kurulum, komisyonlama ve kullanıcı eğitimi.' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 sm:p-5 border border-slate-100"
                >
                  <h5 className="font-semibold text-navy mb-1 text-xs sm:text-sm">{feature.title}</h5>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
