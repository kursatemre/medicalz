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
    <section id="iletisim" className="py-24 bg-medical-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Iletisim
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Bizimle Iletisime Gecin
          </h2>
          <p className="text-slate-medium max-w-2xl mx-auto">
            Urunlerimiz ve hizmetlerimiz hakkinda detayli bilgi almak veya
            teklif talep etmek icin bize ulasin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-navy mb-6">
                Teklif & Teknik Bilgi Talep Formu
              </h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      placeholder="Adiniz Soyadiniz"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Kurum
                    </label>
                    <input
                      type="text"
                      placeholder="Kurum / Hastane Adi"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                      E-posta
                    </label>
                    <input
                      type="email"
                      placeholder="ornek@kurum.com.tr"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="+90 (5XX) XXX XX XX"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                    Konu
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all bg-white">
                    <option>Teklif Talebi</option>
                    <option>Teknik Bilgi Talebi</option>
                    <option>Kalibrasyon Hizmeti</option>
                    <option>Egitim Programi</option>
                    <option>Servis & Destek</option>
                    <option>Diger</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                    Mesajiniz
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ilgilendiginiz urunler, miktar, teknik gereksinimler vb."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white py-3.5 rounded-lg font-semibold text-sm transition-colors"
                >
                  <Send size={16} />
                  Talep Gonderin
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-7 text-white">
              <h4 className="font-bold text-lg mb-6">Merkez Ofis</h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Adres</p>
                    <p className="text-sm text-white/70 mt-0.5">
                      Teknopark Istanbul, No: 1/2
                      <br />
                      Pendik, Istanbul 34906
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Telefon</p>
                    <p className="text-sm text-white/70 mt-0.5">
                      +90 (212) 123 45 67
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">E-posta</p>
                    <p className="text-sm text-white/70 mt-0.5">
                      info@medicalz.com.tr
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Calisma Saatleri</p>
                    <p className="text-sm text-white/70 mt-0.5">
                      Pazartesi - Cuma: 09:00 - 18:00
                      <br />
                      Cumartesi: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
              <h4 className="font-bold text-navy text-sm mb-2">
                Acil Teknik Destek
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Mevcut musterilerimiz icin 7/24 teknik destek hatti.
              </p>
              <a
                href="tel:+908501234567"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                <Phone size={14} />
                0850 123 45 67
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
