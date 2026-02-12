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
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <Microscope className="text-white" size={20} />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">
                  Medical<span className="text-accent">Z</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Tibbi radyasyon teknolojileri, dozimetri cozumleri ve
              uzman muhendislik hizmetleri.
            </p>
            <p className="text-xs text-white/30">
              ISO 13485 &middot; CE &middot; TURKAK Akredite
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">
              Urunler
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#urunler"
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">
              Hizmetler
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#hizmetler"
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">
              Kurumsal
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 MedicalZ Tibbi Teknoloji A.S. Tum haklari saklidir.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Gizlilik Politikasi
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Kullanim Kosullari
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
