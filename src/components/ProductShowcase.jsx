import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Radiation,
  Activity,
  ShieldCheck,
  Atom,
  Pill,
  ScanLine,
  MonitorCog,
  ArrowRight,
  Package,
} from 'lucide-react';

const categories = [
  {
    id: 'radyoterapi',
    name: 'Radyoterapi Dozimetri',
    shortName: 'Radyoterapi',
    icon: Radiation,
    count: 8,
    description: 'Hasta tedavisi icin hassas doz olcum ve dogrulama sistemleri.',
    products: [
      { name: 'Ion Odasi Dozimetreleri', code: 'RTD-100' },
      { name: 'Film Dozimetri Sistemleri', code: 'RTD-200' },
      { name: 'TLD Okuyuculari', code: 'RTD-300' },
      { name: '3D Su Fantom Sistemleri', code: 'RTD-400' },
    ],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80',
  },
  {
    id: 'radyasyon',
    name: 'Radyasyon Olcum',
    shortName: 'Radyasyon',
    icon: Activity,
    count: 7,
    description: 'Cevre ve bireysel radyasyon izleme cihazlari.',
    products: [
      { name: 'Portatif Doz Olcerler', code: 'ROM-100' },
      { name: 'Alan Monitormeri', code: 'ROM-200' },
      { name: 'Kisisel Dozimetreler', code: 'ROM-300' },
      { name: 'Kontaminasyon Olcerler', code: 'ROM-400' },
    ],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
  },
  {
    id: 'kalite',
    name: 'Kalite Kontrol',
    shortName: 'Kalite',
    icon: ShieldCheck,
    count: 6,
    description: 'Radyoterapi ve goruntuleme cihazlari icin QA ekipmanlari.',
    products: [
      { name: 'Lineer Hizlandirici QA Seti', code: 'QA-100' },
      { name: 'CT Kalite Kontrol Fantom', code: 'QA-200' },
      { name: 'Mekanik QA Aletleri', code: 'QA-300' },
      { name: 'Isik Alan Analizoru', code: 'QA-400' },
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
  {
    id: 'nukleer',
    name: 'Nukleer Tip',
    shortName: 'Nukleer',
    icon: Atom,
    count: 5,
    description: 'Gamma kamera, PET/CT kalite kontrol ve kalibrasyon cihazlari.',
    products: [
      { name: 'Doz Kalibratoru', code: 'NT-100' },
      { name: 'Gamma Kamera Fantom', code: 'NT-200' },
      { name: 'PET Kalite Kontrol Kiti', code: 'NT-300' },
      { name: 'Kaynak Kalibrasyon Seti', code: 'NT-400' },
    ],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
  },
  {
    id: 'farmasotik',
    name: 'Radyofarmasotik',
    shortName: 'Farmasotik',
    icon: Pill,
    count: 4,
    description: 'Radyofarmasotik uretim ve kalite kontrol ekipmanlari.',
    products: [
      { name: 'Radyokimyasal Saflick Analiz Cihazi', code: 'RF-100' },
      { name: 'Aktivite Olcum Sistemi', code: 'RF-200' },
      { name: 'Sterilite Test Kiti', code: 'RF-300' },
      { name: 'Kursunsiz Koruma Sistemi', code: 'RF-400' },
    ],
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
  },
  {
    id: 'pozisyonlama',
    name: 'Hasta Pozisyonlama',
    shortName: 'Pozisyonlama',
    icon: ScanLine,
    count: 5,
    description: 'Hassas hasta pozisyonlama ve sabitleme sistemleri.',
    products: [
      { name: 'Termoplastik Maske Sistemi', code: 'HP-100' },
      { name: 'Vakum Yatak Sistemi', code: 'HP-200' },
      { name: 'Stereotaktik Cerceve', code: 'HP-300' },
      { name: 'Lazer Pozisyonlama Sistemi', code: 'HP-400' },
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
  },
  {
    id: 'yazilim',
    name: 'Yazilim Cozumleri',
    shortName: 'Yazilim',
    icon: MonitorCog,
    count: 5,
    description: 'Dozimetri analiz, raporlama ve veri yonetim yazilimlari.',
    products: [
      { name: 'Doz Analiz Yazilimi', code: 'SW-100' },
      { name: 'QA Raporlama Platformu', code: 'SW-200' },
      { name: 'Radyasyon Izleme SCADA', code: 'SW-300' },
      { name: 'Hasta Takip Sistemi', code: 'SW-400' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('radyoterapi');
  const tabsRef = useRef(null);

  const active = categories.find((c) => c.id === activeCategory);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeTab = tabsRef.current.querySelector('[data-active="true"]');
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeCategory]);

  return (
    <section id="urunler" className="py-16 sm:py-24 bg-medical-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 sm:mb-3">
            Urun Portfoyumuz
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 sm:mb-4">
            7 Kategoride 40+ Urun
          </h2>
          <p className="text-sm sm:text-base text-slate-medium max-w-2xl mx-auto">
            Radyoterapi, nukleer tip ve radyasyon guvenligi alaninda kapsamli
            cozumler sunuyoruz.
          </p>
        </motion.div>

        {/* Category tabs - horizontal scroll on mobile */}
        <div
          ref={tabsRef}
          className="flex gap-2 mb-8 sm:mb-12 overflow-x-auto scrollbar-hide pb-2 sm:pb-0 sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              data-active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-medium transition-all shrink-0 active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-navy text-white shadow-lg shadow-navy/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <cat.icon size={15} />
              <span className="sm:hidden whitespace-nowrap">{cat.shortName}</span>
              <span className="hidden sm:inline whitespace-nowrap">{cat.name}</span>
              <span
                className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-md ${
                  activeCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Active category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-5 sm:gap-8"
          >
            {/* Category image */}
            <div className="relative rounded-2xl overflow-hidden h-52 sm:h-72 lg:h-auto">
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {active.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">{active.description}</p>
              </div>
            </div>

            {/* Product cards */}
            <div className="space-y-2.5 sm:space-y-3">
              {active.products.map((product, i) => (
                <motion.div
                  key={product.code}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="group bg-white rounded-xl p-4 sm:p-5 border border-slate-100 hover:border-navy/20 hover:shadow-lg active:bg-slate-50 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 bg-navy/5 group-hover:bg-navy/10 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                        <Package size={18} className="text-navy" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-navy transition-colors truncate">
                          {product.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
                          Model: {product.code}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-slate-300 group-hover:text-navy group-hover:translate-x-1 transition-all shrink-0"
                    />
                  </div>
                </motion.div>
              ))}

              {/* CTA buttons - stacked on mobile */}
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href="#iletisim"
                  className="flex-1 text-center px-6 py-3.5 sm:py-3 bg-navy hover:bg-navy-light active:bg-navy-dark text-white text-sm font-semibold rounded-xl transition-colors active:scale-[0.98]"
                >
                  Teklif Isteyin
                </a>
                <a
                  href="#teknik"
                  className="flex-1 text-center px-6 py-3.5 sm:py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white active:bg-navy-dark active:text-white text-sm font-semibold rounded-xl transition-all active:scale-[0.98]"
                >
                  Teknik Detay
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
