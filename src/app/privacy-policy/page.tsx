import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası - SpartaLog',
  description: 'SpartaLog uygulamasının gizlilik politikası ve veri koruma ilkeleri.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
          <h1 className="text-3xl font-bold text-[#02cf68] mb-8">Gizlilik Politikası</h1>
          
          <div className="prose prose-lg max-w-none prose-invert">
            <p className="text-sm text-gray-400 mb-6">
              <strong>Son Güncelleme Tarihi:</strong> 25 Ağustos 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">1. Giriş</h2>
              <p className="text-gray-300 mb-4">
                SpartaLog (&ldquo;biz&rdquo;, &ldquo;bizim&rdquo; veya &ldquo;uygulama&rdquo;) olarak, kullanıcılarımızın gizliliğini korumaya önem veriyoruz. 
                Bu Gizlilik Politikası, SpartaLog uygulamasını kullanırken toplanan, kullanılan ve paylaşılan bilgileri açıklar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">2. Bilgi Toplama</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">2.1 Kişisel Bilgiler</h3>
              <p className="text-gray-300 mb-4">
                SpartaLog uygulamasını kullanabilmek için aşağıdaki bilgileri topluyoruz:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>E-posta Adresi:</strong> Hesap oluşturma ve giriş yapabilmek için</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">2.2 Otomatik Olarak Toplanan Bilgiler</h3>
              <p className="text-gray-300 mb-4">
                Uygulama kullanımı sırasında aşağıdaki bilgiler otomatik olarak toplanabilir:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Kullanım Verileri:</strong> Uygulama içi satın alımlar, çökme raporları</li>
                <li><strong>Analitik Veriler:</strong> Google Analytics aracılığıyla toplanan kullanım istatistikleri</li>
                <li><strong>Reklam Verileri:</strong> Reklam gösterimi ve etkileşimi ile ilgili veriler</li>
                <li><strong>Cihaz Bilgileri:</strong> Cihaz türü, işletim sistemi, uygulama versiyonu</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">3. Bilgi Kullanımı</h2>
              <p className="text-gray-300 mb-4">
                Topladığımız bilgileri aşağıdaki amaçlarla kullanıyoruz:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Hesap oluşturma ve kimlik doğrulama</li>
                <li>Uygulama içi satın alımların işlenmesi</li>
                <li>Uygulama performansının iyileştirilmesi ve hataların giderilmesi</li>
                <li>Kullanıcı deneyiminin analiz edilmesi</li>
                <li>Kişiselleştirilmiş reklamların gösterilmesi</li>
                <li>Uygulama güvenliğinin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">4. Bilgi Paylaşımı</h2>
              <p className="text-gray-300 mb-4">
                Bilgilerinizi aşağıdaki durumlarda üçüncü taraflarla paylaşabiliriz:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Reklam Ortakları:</strong> Kişiselleştirilmiş reklamlar için</li>
                <li><strong>Analitik Sağlayıcıları:</strong> Google Analytics gibi hizmetler için</li>
                <li><strong>Ödeme İşlemcileri:</strong> Uygulama içi satın alımlar için</li>
                <li><strong>Yasal Zorunluluklar:</strong> Yasa gereği gerekli olduğunda</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">5. Üçüncü Taraf Servisler ve SDK&apos;lar</h2>
              <p className="text-gray-300 mb-4">
                Uygulamamız aşağıdaki üçüncü taraf servisleri ve SDK&apos;ları kullanmaktadır:
              </p>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.1 Analytics Servisleri</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Google Analytics:</strong> Kullanım istatistikleri ve performans analizi için</li>
                <li><strong>Firebase Analytics:</strong> Uygulama kullanım verilerinin analizi için</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.2 Reklam Servisleri</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Google AdMob:</strong> Reklam gösterimi ve reklam performansı analizi için</li>
                <li><strong>Facebook Audience Network:</strong> Kişiselleştirilmiş reklamlar için</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.3 Çökme Raporlama</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Firebase Crashlytics:</strong> Uygulama hatalarının tespiti ve çözümü için</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.4 Ödeme Servisleri</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Google Play Billing:</strong> Android uygulama içi satın alımlar için</li>
                <li><strong>Apple App Store In-App Purchases:</strong> iOS uygulama içi satın alımlar için</li>
              </ul>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">5.5 Platform Servisleri</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Google Play Services:</strong> Android platform entegrasyonu için</li>
                <li><strong>Apple App Store Connect:</strong> iOS platform entegrasyonu için</li>
              </ul>

              <p className="text-gray-300 mb-4">
                Bu servisler kendi gizlilik politikalarına sahiptir ve verilerinizi kendi politikalarına göre işleyebilirler.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">6. Üçüncü Taraf Gizlilik Politikaları</h2>
              <p className="text-gray-300 mb-4">
                Kullandığımız üçüncü taraf servislerin gizlilik politikalarına aşağıdaki linklerden ulaşabilirsiniz:
              </p>
              
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="text-lg font-medium text-[#02cf68] mb-3">Google Servisleri:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">Google Play Services (Analytics)</a></li>
                  <li>• <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">Firebase Crashlytics (Crash Reporting)</a></li>
                  <li>• <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">AdMob (Advertising)</a></li>
                  <li>• <a href="https://developer.android.com/google/play/billing" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">Google Play Billing (In-App Purchases)</a></li>
                </ul>
                
                <h4 className="text-lg font-medium text-[#02cf68] mb-3 mt-4">Apple Servisleri:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">Apple Privacy Policy</a></li>
                  <li>• <a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" rel="noopener noreferrer" className="text-[#02cf68] hover:underline">App Store Review Guidelines</a></li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">7. Veri Saklama</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>E-posta Adresi:</strong> Hesabınız aktif olduğu sürece saklanır</li>
                <li><strong>Antrenman Verileri:</strong> Oluşturduğunuz workout&apos;lar hesabınızla birlikte saklanır</li>
                <li><strong>Reklam ve Analitik Veriler:</strong> Genel kullanım istatistikleri olarak saklanır</li>
                <li><strong>Çökme Raporları:</strong> Hata çözümü için gerekli süre boyunca saklanır</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">8. Kullanıcı Hakları</h2>
              <p className="text-gray-300 mb-4">
                Aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Kişisel verilerinize erişim</li>
                <li>Verilerinizin düzeltilmesi</li>
                <li>Verilerinizin silinmesi</li>
                <li>Veri işlemeye itiraz etme</li>
                <li>Veri taşınabilirliği</li>
                <li>Reklam kişiselleştirmesini kapatma</li>
              </ul>
              <p className="text-gray-300 mb-4">
                Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">9. Çocukların Gizliliği</h2>
              <p className="text-gray-300 mb-4">
                SpartaLog, 13 yaş altındaki çocuklar için tasarlanmamıştır. Bilerek 13 yaş altındaki çocuklardan 
                kişisel bilgi toplamayız. Eğer 13 yaş altında bir çocuktan bilgi topladığımızı fark edersek, 
                bu bilgileri derhal sileriz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">10. Güvenlik</h2>
              <p className="text-gray-300 mb-4">
                Verilerinizi korumak için uygun güvenlik önlemleri alıyoruz. Ancak, internet üzerinden 
                veri iletiminin %100 güvenli olmadığını unutmayın.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">11. Çerezler ve Takip Teknolojileri</h2>
              <p className="text-gray-300 mb-4">
                Uygulamamız, deneyiminizi iyileştirmek için çerezler ve benzer takip teknolojileri kullanabilir.
                Bu teknolojiler şunları içerir:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Analytics çerezleri (kullanım istatistikleri için)</li>
                <li>Reklam çerezleri (kişiselleştirilmiş reklamlar için)</li>
                <li>Fonksiyonel çerezler (uygulama özellikleri için)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">12. Bu Gizlilik Politikasındaki Değişiklikler</h2>
              <p className="text-gray-300 mb-4">
                Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlanacak ve 
                &ldquo;Son Güncelleme Tarihi&rdquo; güncellenecektir. Değişikliklerden haberdar olmak için bu sayfayı 
                düzenli olarak kontrol etmenizi öneririz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">13. İletişim</h2>
              <p className="text-gray-300 mb-4">
                Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300"><strong>Geliştirici:</strong> İbrahim Özcan</p>
                <p className="text-gray-300"><strong>E-posta:</strong> ibosnfs1997@gmail.com</p>
                <p className="text-gray-300"><strong>Adres:</strong> Bursa, Türkiye</p>
              </div>
            </section>

            <div className="border-t border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-400 italic">
                Bu Gizlilik Politikası, SpartaLog uygulamasının kullanımı için geçerlidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
