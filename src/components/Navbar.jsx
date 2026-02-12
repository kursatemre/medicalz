import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Microscope,
} from 'lucide-react';

const productCategories = [
  'Radyoterapi Dozimetri Sistemleri',
  'Radyasyon Olcum Cihazlari',
  'Kalite Kontrol Ekipmanlari',
  'Nukleer Tip Cihazlari',
  'Radyofarmasotik Urunler',
  'Hasta Pozisyonlama Sistemleri',
  'Yazilim Cozumleri',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
      {/* Top bar */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-6 text-xs text-white/80">
          <a href="tel:+902121234567" className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone size={12} /> +90 (212) 123 45 67
          </a>
          <a href="mailto:info@medicalz.com.tr" className="flex items-center gap-1 hover:text-white transition-colors">
            <Mail size={12} /> info@medicalz.com.tr
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              scrolled ? 'bg-navy' : 'bg-white/10 backdrop-blur-sm'
            }`}
          >
            <Microscope className="text-white" size={22} />
          </div>
          <div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              Medical<span className="text-accent">Z</span>
            </span>
            <p
              className={`text-[10px] tracking-widest uppercase transition-colors ${
                scrolled ? 'text-slate-medium' : 'text-white/60'
              }`}
            >
              Tibbi Teknoloji
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          <NavLink scrolled={scrolled} href="#anasayfa">
            Ana Sayfa
          </NavLink>

          {/* Products dropdown */}
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
              Urunler
              <ChevronDown
                size={14}
                className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 overflow-hidden"
                >
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      7 Kategori &middot; 40+ Urun
                    </p>
                  </div>
                  {productCategories.map((cat, i) => (
                    <a
                      key={i}
                      href="#urunler"
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-navy hover:text-white transition-colors"
                    >
                      {cat}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink scrolled={scrolled} href="#hizmetler">
            Hizmetler
          </NavLink>
          <NavLink scrolled={scrolled} href="#hakkimizda">
            Hakkimizda
          </NavLink>
          <NavLink scrolled={scrolled} href="#iletisim">
            Iletisim
          </NavLink>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#iletisim"
            className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Teklif Alin
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-navy' : 'text-white'
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              <MobileLink href="#anasayfa" onClick={() => setMobileOpen(false)}>
                Ana Sayfa
              </MobileLink>
              <div className="py-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Urunler (7 Kategori)
                </p>
                {productCategories.map((cat, i) => (
                  <a
                    key={i}
                    href="#urunler"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-600 hover:text-navy hover:bg-slate-50 rounded-lg"
                  >
                    {cat}
                  </a>
                ))}
              </div>
              <MobileLink href="#hizmetler" onClick={() => setMobileOpen(false)}>
                Hizmetler
              </MobileLink>
              <MobileLink href="#hakkimizda" onClick={() => setMobileOpen(false)}>
                Hakkimizda
              </MobileLink>
              <MobileLink href="#iletisim" onClick={() => setMobileOpen(false)}>
                Iletisim
              </MobileLink>
              <div className="pt-4">
                <a
                  href="#iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 bg-navy text-white text-sm font-semibold rounded-lg"
                >
                  Teklif Alin
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ children, scrolled, href }) {
  return (
    <a
      href={href}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
        scrolled
          ? 'text-slate-700 hover:text-navy hover:bg-slate-100'
          : 'text-white/90 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </a>
  );
}

function MobileLink({ children, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:text-navy hover:bg-slate-50 rounded-lg"
    >
      {children}
    </a>
  );
}
