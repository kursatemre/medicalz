import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="iletisim" className="py-16 sm:py-24 bg-medical-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 sm:mb-3">
            Iletisim
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3 sm:mb-4">
            Bizimle Iletisime Gecin
          </h2>
          <p className="text-sm sm:text-base text-slate-medium max-w-2xl mx-auto">
            Urunlerimiz ve hizmetlerimiz hakkinda detayli bilgi almak veya
            teklif talep etmek icin bize ulasin.
          </p>
        </motion.div>

        {/* Mobile: contact info first, then form */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact info - shown first on mobile via order */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-3 sm:space-y-4 order-first lg:order-last"
          >
            <div className="bg-linear-to-br from-navy to-navy-dark rounded-2xl p-5 sm:p-7 text-white">
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Merkez Ofis</h4>
              <div className="space-y-4 sm:space-y-5">
                <ContactInfoRow icon={MapPin} label="Adres">
                  Teknopark Istanbul, No: 1/2
                  <br />
                  Pendik, Istanbul 34906
                </ContactInfoRow>
                <ContactInfoRow icon={Phone} label="Telefon">
                  <a href="tel:+902121234567" className="active:text-accent transition-colors">
                    +90 (212) 123 45 67
                  </a>
                </ContactInfoRow>
                <ContactInfoRow icon={Mail} label="E-posta">
                  <a href="mailto:info@medicalz.com.tr" className="active:text-accent transition-colors">
                    info@medicalz.com.tr
                  </a>
                </ContactInfoRow>
                <ContactInfoRow icon={Clock} label="Calisma Saatleri">
                  Pazartesi - Cuma: 09:00 - 18:00
                  <br />
                  Cumartesi: 09:00 - 13:00
                </ContactInfoRow>
              </div>
            </div>

            {/* Quick CTA - thumb-friendly */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 sm:p-6">
              <h4 className="font-bold text-navy text-sm mb-2">
                Acil Teknik Destek
              </h4>
              <p className="text-xs text-slate-500 mb-3 sm:mb-4">
                Mevcut musterilerimiz icin 7/24 teknik destek hatti.
              </p>
              <a
                href="tel:+908501234567"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark active:text-accent-dark transition-colors py-1"
              >
                <Phone size={14} />
                0850 123 45 67
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-100">
              <h3 className="text-base sm:text-lg font-bold text-navy mb-5 sm:mb-6">
                Teklif & Teknik Bilgi Talep Formu
              </h3>
              <form className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormField label="Ad Soyad" placeholder="Adiniz Soyadiniz" type="text" />
                  <FormField label="Kurum" placeholder="Kurum / Hastane Adi" type="text" />
                </div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormField label="E-posta" placeholder="ornek@kurum.com.tr" type="email" />
                  <FormField label="Telefon" placeholder="+90 (5XX) XXX XX XX" type="tel" />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                    Konu
                  </label>
                  <select className="w-full px-4 py-3 sm:py-3 rounded-xl border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all bg-white appearance-none">
                    <option>Teklif Talebi</option>
                    <option>Teknik Bilgi Talebi</option>
                    <option>Kalibrasyon Hizmeti</option>
                    <option>Egitim Programi</option>
                    <option>Servis & Destek</option>
                    <option>Diger</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                    Mesajiniz
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ilgilendiginiz urunler, miktar, teknik gereksinimler vb."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy-light active:bg-navy-dark text-white py-4 sm:py-3.5 rounded-xl font-semibold text-sm transition-colors active:scale-[0.98]"
                >
                  <Send size={16} />
                  Talep Gonderin
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={15} />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-semibold">{label}</p>
        <p className="text-xs sm:text-sm text-white/70 mt-0.5">{children}</p>
      </div>
    </div>
  );
}

function FormField({ label, placeholder, type }) {
  return (
    <div>
      <label className="block text-[11px] sm:text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
      />
    </div>
  );
}
