import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  Atom,
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
} from 'lucide-react';

const productCategories = [
  {
    name: 'Radyoaktif Kalibrasyon Kaynakları',
    icon: Radiation,
    count: 3,
    products: ['PET-CT / PET-MR Kalibrasyon Kaynakları', 'Doz Kalibratörü Kaynakları', 'Çubuk Kaynaklar'],
  },
  {
    name: 'Radyasyon Ölçüm Sistemleri',
    icon: Activity,
    count: 7,
    products: ['ISOMED 2162 Tiroid Uptake', 'ISOMED 2010 Doz Kalibratörü', 'ISOMED 2100 Kuyu Tipi Sayıcı', 'DolMo GM Survey Metre', 'CoMo 170-300 Sürvey Metre', 'ALMO Alan Monitörü', 'HFC El Ayak Monitörü'],
  },
  {
    name: 'Radyokoruyunum Ekipmanları',
    icon: ShieldCheck,
    count: 12,
    products: ['Çeker Ocak', 'Göğüs Zırhı', 'Kurşun Paravan', 'Enjektör Zırhları', 'Sentez Hücresi', 'Nükleer Tıp Mobilya'],
  },
  {
    name: 'Gama Prob',
    icon: Crosshair,
    count: 1,
    products: ['CENNA-500W Kablosuz Gama Prob'],
  },
  {
    name: 'Radyofarmasötik Sentez Cihazları',
    icon: FlaskConical,
    count: 4,
    products: ['FlexLab F-18 Sentez', 'Multisync Ga-68 / Lu-177', 'C-11 Sentez Cihazı', 'Filter Integrity Test'],
  },
  {
    name: 'Radyofarmasötik Üretim Otomasyonu',
    icon: Droplets,
    count: 4,
    products: ['STINGRAY Mikro Akışkan', 'OCTOPUS Lu-177 Otomasyon', 'JELLYFISH 18F Otomasyon', 'CRAB Katı Hedef İşleme'],
  },
  {
    name: 'İyot-131 Takip & Tank Sistemleri',
    icon: Container,
    count: 3,
    products: ['PADOS Hasta İzleme', 'Atık Su Sayıcı', 'İyot-131 Tank Sistemleri'],
  },
  {
    name: 'Fantom',
    icon: Box,
    count: 11,
    products: ['Jaszczak Fantom', 'Hoffman 3D Beyin Fantom', 'NEMA PET Fantom', 'PET-BT Fantom', 'Sıcak Nokta Fantomları'],
  },
  {
    name: 'Kurşunlu Kapı ve Pencereler',
    icon: DoorOpen,
    count: 2,
    products: ['Kurşunlu Kapı', 'Kurşunlu Pencere'],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [expandedCat, setExpandedCat] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  const closeSidebar = () => {
    setSidebarOpen(false);
    setExpandedCat(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar - hidden on mobile */}
        <div
          className={`hidden md:block transition-all duration-300 overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-end gap-6 text-xs text-white/80">
            <a href="tel:+902125232300" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone size={12} /> +90 (212) 523 23 00
            </a>
            <a href="mailto:info@picorad.com" className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail size={12} /> info@picorad.com
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-50">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors ${
                scrolled || sidebarOpen ? 'bg-navy' : 'bg-white/10 backdrop-blur-sm'
              }`}
            >
              <Atom className="text-white" size={18} />
            </div>
            <div>
              <span
                className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                  scrolled || sidebarOpen ? 'text-navy' : 'text-white'
                }`}
              >
                Pico<span className="text-accent">Rad</span>
              </span>
              <p
                className={`text-[9px] sm:text-[10px] tracking-widest uppercase transition-colors ${
                  scrolled || sidebarOpen ? 'text-slate-medium' : 'text-white/60'
                }`}
              >
                Medikal
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink scrolled={scrolled} href="#anasayfa">Ana Sayfa</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  scrolled
                    ? 'text-slate-700 hover:text-navy hover:bg-slate-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Ürünler
                <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 py-2"
                  >
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        9 Kategori &middot; 80+ Ürün
                      </p>
                    </div>
                    {productCategories.map((cat, i) => (
                      <a
                        key={i}
                        href="#urunler"
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-navy hover:text-white transition-colors"
                      >
                        {cat.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink scrolled={scrolled} href="#cozumler">Çözümler</NavLink>
            <NavLink scrolled={scrolled} href="#hakkimizda">Hakkımızda</NavLink>
            <NavLink scrolled={scrolled} href="#iletisim">İletişim</NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#iletisim"
              className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-95"
            >
              Teklif Alın
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors active:scale-90 ${
              scrolled || sidebarOpen ? 'text-navy' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {sidebarOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE SLIDE-IN SIDEBAR */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeSidebar}
              className="fixed inset-0 z-40 bg-navy-dark/60 sidebar-overlay lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[85vw] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="h-16 shrink-0" />
              <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6">
                <div className="space-y-1 pt-2">
                  <SidebarLink href="#anasayfa" onClick={closeSidebar}>Ana Sayfa</SidebarLink>
                  <div>
                    <button
                      onClick={() => setExpandedCat(expandedCat === 'products' ? null : 'products')}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold text-navy rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    >
                      <span>Ürünler</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">9 Kategori</span>
                        <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${expandedCat === 'products' ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {expandedCat === 'products' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                          <div className="pl-2 pr-1 pb-2 space-y-0.5">
                            {productCategories.map((cat, i) => (
                              <CategoryAccordion key={i} category={cat} isExpanded={expandedCat === cat.name} onToggle={() => setExpandedCat(expandedCat === cat.name ? 'products' : cat.name)} onNavigate={closeSidebar} />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <SidebarLink href="#cozumler" onClick={closeSidebar}>Çözümler</SidebarLink>
                  <SidebarLink href="#hakkimizda" onClick={closeSidebar}>Hakkımızda</SidebarLink>
                  <SidebarLink href="#iletisim" onClick={closeSidebar}>İletişim</SidebarLink>
                </div>
                <div className="border-t border-slate-100 my-5" />
                <div className="space-y-3 px-1">
                  <a href="tel:+902125232300" className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-50 active:bg-slate-100 transition-colors">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center shrink-0"><Phone size={16} className="text-navy" /></div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Telefon</p>
                      <p className="text-sm font-semibold text-navy">+90 (212) 523 23 00</p>
                    </div>
                  </a>
                  <a href="mailto:info@picorad.com" className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-50 active:bg-slate-100 transition-colors">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center shrink-0"><Mail size={16} className="text-navy" /></div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">E-posta</p>
                      <p className="text-sm font-semibold text-navy">info@picorad.com</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="shrink-0 p-5 border-t border-slate-100 bg-white">
                <a href="#iletisim" onClick={closeSidebar} className="flex items-center justify-center gap-2 w-full py-4 bg-navy text-white font-semibold rounded-xl text-sm active:bg-navy-dark active:scale-[0.98] transition-all">
                  Teklif Alın <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function CategoryAccordion({ category, isExpanded, onToggle, onNavigate }) {
  const Icon = category.icon;
  return (
    <div>
      <button onClick={onToggle} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left hover:bg-slate-50 active:bg-slate-100 transition-colors">
        <div className="w-8 h-8 bg-navy/5 rounded-lg flex items-center justify-center shrink-0"><Icon size={15} className="text-navy" /></div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-700 truncate">{category.name}</p>
          <p className="text-[11px] text-slate-400">{category.count} ürün</p>
        </div>
        <ChevronRight size={14} className={`text-slate-300 transition-transform duration-200 shrink-0 ${isExpanded ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <div className="pl-14 pr-3 pb-2 space-y-0.5">
              {category.products.map((product, j) => (
                <a key={j} href="#urunler" onClick={onNavigate} className="block py-2.5 px-3 text-sm text-slate-500 hover:text-navy rounded-lg active:bg-slate-50 transition-colors">{product}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavLink({ children, scrolled, href }) {
  return (
    <a href={href} className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${scrolled ? 'text-slate-700 hover:text-navy hover:bg-slate-100' : 'text-white/90 hover:text-white hover:bg-white/10'}`}>{children}</a>
  );
}

function SidebarLink({ children, href, onClick }) {
  return (
    <a href={href} onClick={onClick} className="flex items-center px-4 py-3.5 text-base font-semibold text-navy rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors">{children}</a>
  );
}
