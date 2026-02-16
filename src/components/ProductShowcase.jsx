import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Radiation,
  Activity,
  ShieldCheck,
  Crosshair,
  FlaskConical,
  Droplets,
  Container,
  Box,
  DoorOpen,
  ArrowRight,
  Package,
} from 'lucide-react';

const categories = [
  {
    id: 'kalibrasyon',
    name: 'Radyoaktif Kalibrasyon Kaynakları',
    shortName: 'Kalibrasyon',
    icon: Radiation,
    count: 3,
    description: 'PET-CT, PET-MR ve doz kalibratörleri için yüksek kaliteli radyoaktif kaynaklar. Ömür boyu garanti.',
    products: [
      { name: 'PET-CT / PET-MR Kalibrasyon Kaynakları', code: 'PRC-PET' },
      { name: 'Doz Kalibratörü Kaynakları', code: 'PRC-DC' },
      { name: 'Çubuk Kaynaklar', code: 'PRC-ROD' },
    ],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80',
  },
  {
    id: 'olcum',
    name: 'Radyasyon Ölçüm Sistemleri',
    shortName: 'Ölçüm',
    icon: Activity,
    count: 7,
    description: 'Tiroid uptake, doz kalibratörü, sürvey metre ve kontaminasyon monitörleri.',
    products: [
      { name: 'ISOMED 2162 Tiroid Uptake', code: 'ISO-2162' },
      { name: 'ISOMED 2010 Doz Kalibratörü', code: 'ISO-2010' },
      { name: 'ISOMED 2100 Kuyu Tipi Sayıcı', code: 'ISO-2100' },
      { name: 'DolMo GM Sürvey Metre', code: 'DM-01' },
      { name: 'CoMo 170-300 Sürvey Metre', code: 'CM-170' },
      { name: 'ALMO Alan Monitörü', code: 'ALM-01' },
      { name: 'HFC El Ayak Monitörü', code: 'HFC-01' },
    ],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
  },
  {
    id: 'koruyunum',
    name: 'Radyokoruyunum Ekipmanları',
    shortName: 'Koruyunum',
    icon: ShieldCheck,
    count: 12,
    description: 'Çeker ocak, kurşun zırh, enjektör koruma, sentez hücresi ve nükleer tıp mobilyaları.',
    products: [
      { name: 'Çeker Ocak (Fume Hood)', code: 'PRK-FH' },
      { name: 'Göğüs Zırhı', code: 'PRK-GZ' },
      { name: 'Kurşun Paravan', code: 'PRK-KP' },
      { name: 'Enjektör Zırhları', code: 'PRK-EZ' },
      { name: 'Ga-68 Sentez Hücresi', code: 'PRK-SH' },
      { name: 'Nükleer Tıp Mobilya Serisi', code: 'PRK-MOB' },
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
  {
    id: 'gamaprob',
    name: 'Gama Prob',
    shortName: 'Gama Prob',
    icon: Crosshair,
    count: 1,
    description: 'SLNB cerrahisi için kablosuz gama prob sistemi. Meme kanseri, melanom ve baş-boyun cerrahisi.',
    products: [
      { name: 'CENNA-500W Kablosuz Gama Prob', code: 'CN-500W' },
    ],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
  },
  {
    id: 'sentez',
    name: 'Radyofarmasötik Sentez',
    shortName: 'Sentez',
    icon: FlaskConical,
    count: 4,
    description: 'F-18, Ga-68, C-11 ve Lu-177 radyofarmasötik üretim için tam otomatik sentez cihazları.',
    products: [
      { name: 'FlexLab F-18 Radyosentezleyici', code: 'FL-18' },
      { name: 'Multisync Ga-68 / Lu-177 Sentez', code: 'MS-68' },
      { name: 'C-11 Sentez Cihazı', code: 'C11-SYN' },
      { name: 'Filter Integrity Test Cihazı', code: 'FIT-01' },
    ],
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
  },
  {
    id: 'otomasyon',
    name: 'Üretim Otomasyonu',
    shortName: 'Otomasyon',
    icon: Droplets,
    count: 4,
    description: 'Mikroakışkan tabanlı Lu-177, F-18 ve katı hedef işleme otomasyon sistemleri.',
    products: [
      { name: 'STINGRAY Mikroakışkan Sistem', code: 'STR-01' },
      { name: 'OCTOPUS Lu-177 Otomasyon', code: 'OCT-177' },
      { name: 'JELLYFISH 18F Otomasyon', code: 'JF-18' },
      { name: 'CRAB Katı Hedef İşleme', code: 'CRB-01' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    id: 'iyot',
    name: 'İyot-131 Sistemleri',
    shortName: 'İyot-131',
    icon: Container,
    count: 3,
    description: 'Radyoiyot tedavi odaları için hasta takip, atık su izleme ve tank sistemleri.',
    products: [
      { name: 'PADOS Hasta İzleme Sistemi', code: 'PAD-01' },
      { name: 'Atık Su Sayıcı', code: 'ASS-01' },
      { name: 'İyot-131 Tank Sistemleri', code: 'TNK-131' },
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
  },
  {
    id: 'fantom',
    name: 'Fantom',
    shortName: 'Fantom',
    icon: Box,
    count: 11,
    description: 'SPECT, PET-CT ve gama kamera kalite kontrol fantomları. NEMA standartlarında.',
    products: [
      { name: 'Jaszczak Fantom', code: 'FNT-JSZ' },
      { name: 'Hoffman 3D Beyin Fantom', code: 'FNT-HBF' },
      { name: 'NEMA PET Fantom', code: 'FNT-NPT' },
      { name: 'PET-BT Fantom', code: 'FNT-PBT' },
      { name: 'Sıcak Nokta Fantomları', code: 'FNT-HSP' },
    ],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80',
  },
  {
    id: 'kapi',
    name: 'Kurşunlu Kapı ve Pencereler',
    shortName: 'Kapı/Pencere',
    icon: DoorOpen,
    count: 2,
    description: 'Radyasyon odaları için özel üretim kurşunlu kapılar ve kurşunlu camlar.',
    products: [
      { name: 'Kurşunlu Kapı', code: 'KKP-01' },
      { name: 'Kurşunlu Pencere', code: 'KPC-01' },
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('kalibrasyon');
  const tabsRef = useRef(null);

  const active = categories.find((c) => c.id === activeCategory);

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 sm:mb-3">
            Ürün Portföyümüz
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 sm:mb-4">
            9 Kategoride 80+ Ürün
          </h2>
          <p className="text-sm sm:text-base text-slate-medium max-w-2xl mx-auto">
            Nükleer tıp, radyasyon güvenliği ve radyofarmasötik alanında
            kapsamlı çözümler sunuyoruz.
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
                  activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
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
            <div className="relative rounded-2xl overflow-hidden h-52 sm:h-72 lg:h-auto">
              <img src={active.image} alt={active.name} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{active.name}</h3>
                <p className="text-white/80 text-xs sm:text-sm">{active.description}</p>
              </div>
            </div>

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
                        <h4 className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-navy transition-colors truncate">{product.name}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 font-mono">Model: {product.code}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-navy group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </motion.div>
              ))}

              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a href="#iletisim" className="flex-1 text-center px-6 py-3.5 sm:py-3 bg-navy hover:bg-navy-light active:bg-navy-dark text-white text-sm font-semibold rounded-xl transition-colors active:scale-[0.98]">
                  Teklif İsteyin
                </a>
                <a href="#teknik" className="flex-1 text-center px-6 py-3.5 sm:py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white active:bg-navy-dark active:text-white text-sm font-semibold rounded-xl transition-all active:scale-[0.98]">
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
