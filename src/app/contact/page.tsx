import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Send, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'İletişim - SpartaLog',
  description: 'SpartaLog ile iletişime geçin. Sorularınız ve önerileriniz için bizimle iletişime geçin.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-[#02cf68] hover:text-[#02cf68]/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#02cf68] mb-4">İletişim</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              SpartaLog ile ilgili sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <Mail className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">E-posta</h3>
                    <p className="text-gray-300">ibosnfs1997@gmail.com</p>
                    <p className="text-sm text-gray-400 mt-1">En hızlı yanıt için e-posta gönderin</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <MapPin className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Adres</h3>
                    <p className="text-gray-300">Bursa, Türkiye</p>
                    <p className="text-sm text-gray-400 mt-1">Geliştirici ofisi</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <Phone className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Yanıt Süresi</h3>
                    <p className="text-gray-300">24-48 saat</p>
                    <p className="text-sm text-gray-400 mt-1">İş günleri içinde yanıt veriyoruz</p>
                  </div>
                </div>
              </div>

              {/* <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mt-8">
                <h3 className="text-lg font-medium text-[#02cf68] mb-3">Sık Sorulan Sorular</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong>Uygulama ücretsiz mi?</strong> Evet, SpartaLog tamamen ücretsizdir.</p>
                  <p><strong>Hangi platformlarda mevcut?</strong> Şu anda iOS için geliştirilmektedir.</p>
                  <p><strong>Verilerim güvenli mi?</strong> Evet, tüm verileriniz şifrelenmiş olarak saklanır.</p>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-6">Mesaj Gönder</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors"
                    placeholder="Adınız ve soyadınız"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors"
                    placeholder="ornek@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#02cf68] transition-colors"
                    required
                  >
                    <option value="">Konu seçin</option>
                    <option value="general">Genel Soru</option>
                    <option value="bug">Hata Bildirimi</option>
                    <option value="feature">Özellik Önerisi</option>
                    <option value="support">Teknik Destek</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#02cf68] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#02cf68]/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Mesaj Gönder</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Not:</strong> Bu form şu anda demo amaçlıdır. Gerçek iletişim için lütfen e-posta adresimizi kullanın.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#02cf68] mb-4">SpartaLog Hakkında</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                SpartaLog, AI teknolojisi ile güçlendirilmiş fitness takip uygulamasıdır. 
                Antrenmanlarınızı analiz eder, ilerlemenizi takip eder ve hedeflerinize ulaşmanıza yardımcı olur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
