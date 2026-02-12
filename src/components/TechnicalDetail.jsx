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
} from 'lucide-react';

const specs = [
  { icon: Ruler, label: 'Olcum Araligi', value: '0.01 mGy - 10 kGy' },
  { icon: Gauge, label: 'Hassasiyet', value: '\u00B10.5% / 1 nC' },
  { icon: Zap, label: 'Enerji Araligi', value: '30 keV - 50 MeV' },
  { icon: Thermometer, label: 'Calisma Sicakligi', value: '15\u00B0C - 40\u00B0C' },
  { icon: Weight, label: 'Agirlik', value: '2.4 kg' },
  { icon: Box, label: 'Boyutlar', value: '280 x 180 x 95 mm' },
  { icon: Clock, label: 'Batarya Omru', value: '> 8 saat surekli' },
  { icon: Zap, label: 'Baglanti', value: 'USB-C, RS-232, Wi-Fi' },
];

export default function TechnicalDetail() {
  return (
    <section id="teknik" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Teknik Bilgi
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Urun Teknik Ozellikleri
          </h2>
          <p className="text-slate-medium max-w-2xl mx-auto">
            Her urun, endustri standartlarini karsilayan hassas muhendislik ile
            uretilmistir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Product preview card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-28 bg-gradient-to-br from-navy to-navy-dark rounded-2xl overflow-hidden">
              <div className="p-8">
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                  Onde Cikan Urun
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  DOSE-PRO X200
                </h3>
                <p className="text-white/60 text-sm mb-1 font-mono">
                  Model: RTD-200X
                </p>
                <p className="text-white/70 text-sm mt-4 leading-relaxed">
                  Yuksek hassasiyetli referans sinif elektrometre ve ion odasi
                  dozimetri sistemi. Klinik radyoterapi ve endostriyel
                  uygulamalar icin tasarlanmistir.
                </p>
              </div>
              <div className="relative h-52">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=600&q=80"
                  alt="DOSE-PRO X200"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <motion.a
                  href="#iletisim"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  <Mail size={16} />
                  Teknik Bilgi Talep Edin
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  <FileDown size={16} />
                  PDF Datasheet Indir
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Technical specs */}
          <div className="lg:col-span-3">
            <div className="bg-slate-50 rounded-2xl p-8 mb-6">
              <h4 className="text-lg font-bold text-navy mb-6">
                Teknik Ozellikler
              </h4>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <spec.icon size={16} className="text-navy" />
                      </div>
                      <span className="text-sm font-medium text-slate-600">
                        {spec.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-navy font-mono">
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Izlenebilirlik',
                  desc: 'NIST/PTB izlenebilir kalibrasyon sertifikasi ile birlikte teslim edilir.',
                },
                {
                  title: 'Yazilim Destegi',
                  desc: 'Windows ve macOS uyumlu analiz yazilimi lisansi dahildir.',
                },
                {
                  title: 'Garanti',
                  desc: '2 yil uretici garantisi ve genisletilmis servis secenekleri.',
                },
                {
                  title: 'Egitim',
                  desc: 'Yerinde kurulum ve kapsamli kullanici egitimi hizmeti.',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white rounded-xl p-5 border border-slate-100"
                >
                  <h5 className="font-semibold text-navy mb-1 text-sm">
                    {feature.title}
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
