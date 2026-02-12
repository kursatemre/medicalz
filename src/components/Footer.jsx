import { Microscope } from 'lucide-react';

const productLinks = [
  'Radyoterapi Dozimetri',
  'Radyasyon Olcum',
  'Kalite Kontrol',
  'Nukleer Tip',
  'Radyofarmasotik',
  'Hasta Pozisyonlama',
  'Yazilim Cozumleri',
];

const serviceLinks = [
  'Komisyonlama & Kurulum',
  'Kalibrasyon',
  'Egitim Programlari',
  'Kalite Guvence',
  'Teknik Destek',
];

const companyLinks = [
  'Hakkimizda',
  'Referanslar',
  'Kariyer',
  'Blog',
  'Iletisim',
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand - full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <Microscope className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Medical<span className="text-accent">Z</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed mb-3 sm:mb-4">
              Tibbi radyasyon teknolojileri, dozimetri cozumleri ve
              uzman muhendislik hizmetleri.
            </p>
            <p className="text-[10px] sm:text-xs text-white/30">
              ISO 13485 &middot; CE &middot; TURKAK Akredite
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 mb-3 sm:mb-4">
              Urunler
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#urunler"
                    className="text-xs sm:text-sm text-white/40 hover:text-white active:text-accent transition-colors py-0.5 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 mb-3 sm:mb-4">
              Hizmetler
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#hizmetler"
                    className="text-xs sm:text-sm text-white/40 hover:text-white active:text-accent transition-colors py-0.5 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 mb-3 sm:mb-4">
              Kurumsal
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-white/40 hover:text-white active:text-accent transition-colors py-0.5 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] sm:text-xs text-white/30 text-center sm:text-left">
            &copy; 2026 MedicalZ Tibbi Teknoloji A.S. Tum haklari saklidir.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-[10px] sm:text-xs text-white/30 hover:text-white/60 active:text-white transition-colors py-1">
              Gizlilik Politikasi
            </a>
            <a href="#" className="text-[10px] sm:text-xs text-white/30 hover:text-white/60 active:text-white transition-colors py-1">
              Kullanim Kosullari
            </a>
            <a href="#" className="text-[10px] sm:text-xs text-white/30 hover:text-white/60 active:text-white transition-colors py-1">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
