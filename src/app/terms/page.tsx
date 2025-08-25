import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kullanım Şartları - SpartaLog',
  description: 'SpartaLog uygulamasının kullanım şartları ve koşulları.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
          <h1 className="text-3xl font-bold text-[#02cf68] mb-8">Kullanım Şartları</h1>
          
          <div className="prose prose-lg max-w-none prose-invert">
            <p className="text-sm text-gray-400 mb-6">
              <strong>Son Güncelleme Tarihi:</strong> 25 Ağustos 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">1. Taraflar</h2>
              <p className="text-gray-300 mb-4">
                Bu Kullanım Şartları (&ldquo;Şartlar&rdquo;), SpartaLog uygulamasının kullanımını düzenler.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li><strong>Kullanıcı:</strong> SpartaLog uygulamasını kullanan kişi</li>
                <li><strong>Geliştirici:</strong> İbrahim Özcan - SpartaLog uygulamasının geliştiricisi ve sağlayıcısı</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">2. Kullanım Şartları</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">2.1 Yaş Sınırı</h3>
              <p className="text-gray-300 mb-4">
                SpartaLog uygulamasını kullanmak için en az 13 yaşında olmanız gerekmektedir. 13 yaş altındaki 
                kullanıcılar uygulamayı kullanamaz.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">2.2 Kullanım Koşulları</h3>
              <p className="text-gray-300 mb-4">
                Uygulamayı kullanırken aşağıdaki koşullara uymanız gerekmektedir:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Uygulamayı yasal amaçlar için kullanmak</li>
                <li>Başkalarının haklarına saygı göstermek</li>
                <li>Uygulamanın güvenliğini tehlikeye atmamak</li>
                <li>Spam veya zararlı içerik paylaşmamak</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">3. Hesaplar ve Erişim</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">3.1 Hesap Oluşturma</h3>
              <p className="text-gray-300 mb-4">
                SpartaLog uygulamasını kullanmak için hesap oluşturmanız gerekmektedir. Hesap oluştururken 
                geçerli bir e-posta adresi sağlamanız zorunludur.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">3.2 Hesap Güvenliği</h3>
              <p className="text-gray-300 mb-4">
                Hesap bilgilerinizin gizliliği ve güvenliği sizin sorumluluğunuzdadır. Hesabınızın güvenliğini 
                sağlamak için gerekli önlemleri almanız gerekmektedir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">4. Ücretlendirme ve Ödemeler</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">4.1 Uygulama Ücreti</h3>
              <p className="text-gray-300 mb-4">
                SpartaLog uygulaması temel özellikleri ücretsiz olarak sunmaktadır. Uygulama içinde reklamlar 
                gösterilmektedir.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">4.2 Reklamlar</h3>
              <p className="text-gray-300 mb-4">
                Uygulama içinde üçüncü taraf reklamlar gösterilmektedir. Bu reklamlar kişiselleştirilmiş 
                olabilir ve kullanım verilerinize dayalı olarak gösterilebilir.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">4.3 İade Politikası</h3>
              <p className="text-gray-300 mb-4">
                Uygulama içi satın alımlar için iade politikası, Apple App Store ve Google Play Store&apos;un 
                iade politikalarına tabidir. İade taleplerinizi ilgili platform üzerinden yapabilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">5. Yasaklı Kullanım</h2>
              <p className="text-gray-300 mb-4">
                Aşağıdaki faaliyetler kesinlikle yasaktır:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Uygulamayı hack etmeye veya güvenlik açıklarını istismar etmeye çalışmak</li>
                <li>Spam, zararlı içerik veya yanıltıcı bilgi paylaşmak</li>
                <li>Başkalarının haklarını ihlal etmek</li>
                <li>Uygulamanın normal işleyişini bozmaya çalışmak</li>
                <li>Telif haklarını ihlal eden içerik paylaşmak</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">6. İçerik</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">6.1 Kullanıcı İçeriği</h3>
              <p className="text-gray-300 mb-4">
                Uygulamada egzersiz verilerinizi metin olarak girebilirsiniz. Bu içeriklerin doğruluğu ve 
                uygunluğu sizin sorumluluğunuzdadır.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">6.2 Telif Hakları</h3>
              <p className="text-gray-300 mb-4">
                SpartaLog uygulamasının tüm içeriği, tasarımı ve yazılımı geliştiricinin telif hakları 
                altındadır. Uygulama içeriğini kopyalamak, değiştirmek veya dağıtmak yasaktır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">7. Sorumluluk Reddi ve Sınırlamalar</h2>
              
              <h3 className="text-xl font-medium text-[#02cf68] mb-3">7.1 Garanti Reddi</h3>
              <p className="text-gray-300 mb-4">
                SpartaLog uygulaması &ldquo;olduğu gibi&rdquo; sunulmaktadır. Uygulamanın hatasız çalışacağı 
                garanti edilmez. Uygulama kesintileri, hatalar veya veri kayıpları yaşanabilir.
              </p>

              <h3 className="text-xl font-medium text-[#02cf68] mb-3">7.2 Sorumluluk Sınırlaması</h3>
              <p className="text-gray-300 mb-4">
                Geliştirici, uygulama kullanımından kaynaklanan doğrudan veya dolaylı zararlardan sorumlu 
                değildir. Bu, veri kaybı, iş kesintisi veya diğer maddi/manevi zararları içerir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">8. Fesih</h2>
              <p className="text-gray-300 mb-4">
                Hesabınızı istediğiniz zaman sonlandırabilirsiniz. Ayrıca, aşağıdaki durumlarda hesabınız 
                geliştirici tarafından sonlandırılabilir:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Bu kullanım şartlarını ihlal etmeniz</li>
                <li>Uygulamanın güvenliğini tehlikeye atmanız</li>
                <li>Diğer kullanıcıların haklarını ihlal etmeniz</li>
                <li>Yasal düzenlemelere aykırı davranışta bulunmanız</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">9. Geçerli Hukuk ve Yetkili Mahkeme</h2>
              <p className="text-gray-300 mb-4">
                Bu kullanım şartları Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlık durumunda 
                İstanbul Mahkemeleri ve İcra Müdürlükleri yetkilidir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">10. Değişiklikler</h2>
              <p className="text-gray-300 mb-4">
                Bu kullanım şartları zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacak ve 
                &ldquo;Son Güncelleme Tarihi&rdquo; güncellenecektir. Değişikliklerden haberdar olmak için 
                bu sayfayı düzenli olarak kontrol etmenizi öneririz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-4">11. İletişim</h2>
              <p className="text-gray-300 mb-4">
                Bu kullanım şartları hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300"><strong>Geliştirici:</strong> İbrahim Özcan - SpartaLog uygulamasının geliştiricisi ve sağlayıcısı</p>
                <p className="text-gray-300"><strong>E-posta:</strong> ibosnfs1997@gmail.com</p>
                <p className="text-gray-300"><strong>Adres:</strong> Bursa, Türkiye</p>
              </div>
            </section>

            <div className="border-t border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-400 italic">
                Bu Kullanım Şartları, SpartaLog uygulamasının kullanımı için geçerlidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
