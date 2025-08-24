import { Locale } from './i18n'

export const translations = {
  en: {
    nav: {
      features: 'Features',
      screenshots: 'Screenshots',
      download: 'Download'
    },
    hero: {
      badge: 'AI-Powered Fitness Tracking',
      title: 'AI-Powered',
      subtitle: 'Fitness Tracking',
      description: 'Track your workouts with AI technology, monitor your progress, and achieve your fitness goals with SpartaLog.',
      downloadButton: 'Download Now',
      watchDemoButton: 'Watch Demo',
      stats: {
        users: 'Active Users',
        workouts: 'Workouts',
        rating: 'Rating'
      }
    },
    features: {
      title: 'Why',
      titleHighlight: 'SpartaLog',
      subtitle: 'AI-powered fitness tracking application with advanced features',
      items: [
        {
          title: 'AI Analysis',
          description: 'Analyze your workout notes with AI and create detailed exercise plans'
        },
        {
          title: 'Progress Tracking',
          description: 'Track your weight, sets, and reps data with visual charts'
        },
        {
          title: 'Goal Setting',
          description: 'Set personal goals and get AI-powered recommendations'
        },
        {
          title: 'Community',
          description: 'Connect with other athletes and boost your motivation'
        },
        {
          title: 'Quick Recording',
          description: 'Create workout records quickly with voice notes'
        },
        {
          title: 'Secure',
          description: 'Your data is stored safely and encrypted'
        }
      ]
    },
    screenshots: {
      title: 'App',
      titleHighlight: 'Interface',
      subtitle: 'Modern and user-friendly interface',
      items: [
        { title: 'Main Screen' },
        { title: 'Workout Detail' },
        { title: 'Statistics' },
        { title: 'Profile' }
      ]
    },
    stats: {
      items: [
        { label: 'Active Users' },
        { label: 'Workout Records' },
        { label: 'App Rating' }
      ]
    },
    download: {
      title: 'Get',
      titleHighlight: 'Started',
      subtitle: 'Download SpartaLog and start your AI-powered fitness journey',
      features: {
        title: 'Features',
        items: [
          'AI-powered workout analysis',
          'Visual progress charts',
          'Voice note recording',
          'Goal setting and tracking',
          'Secure data storage',
          'Free to use'
        ]
      },
      downloadButton: 'Download from App Store',
      requirements: 'Requires iOS 13.0 or later'
    },
    footer: {
      copyright: '© 2024 SpartaLog. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      contact: 'Contact'
    }
  },
  tr: {
    nav: {
      features: 'Özellikler',
      screenshots: 'Ekran Görüntüleri',
      download: 'İndir'
    },
    hero: {
      badge: 'AI Destekli Fitness Takip',
      title: 'AI Destekli',
      subtitle: 'Fitness Takip',
      description: 'Antrenmanlarınızı AI teknolojisi ile analiz edin, ilerlemenizi takip edin ve hedeflerinize ulaşın.',
      downloadButton: 'Şimdi İndir',
      watchDemoButton: 'Demo İzle',
      stats: {
        users: 'Aktif Kullanıcı',
        workouts: 'Antrenman',
        rating: 'Puan'
      }
    },
    features: {
      title: 'Neden',
      titleHighlight: 'SpartaLog',
      subtitle: 'Gelişmiş özelliklerle AI destekli fitness takip uygulaması',
      items: [
        {
          title: 'AI Analizi',
          description: 'AI ile antrenman notlarınızı analiz edin ve detaylı egzersiz planları oluşturun'
        },
        {
          title: 'İlerleme Takibi',
          description: 'Kilo, set ve tekrar verilerinizi görsel grafiklerle takip edin'
        },
        {
          title: 'Hedef Belirleme',
          description: 'Kişisel hedefler belirleyin ve AI destekli öneriler alın'
        },
        {
          title: 'Topluluk',
          description: 'Diğer sporcularla bağlantı kurun ve motivasyonunuzu artırın'
        },
        {
          title: 'Hızlı Kayıt',
          description: 'Sesli notlarla hızlıca antrenman kaydı oluşturun'
        },
        {
          title: 'Güvenli',
          description: 'Verileriniz güvenli ve şifrelenmiş olarak saklanır'
        }
      ]
    },
    screenshots: {
      title: 'Uygulama',
      titleHighlight: 'Arayüzü',
      subtitle: 'Modern ve kullanıcı dostu arayüz',
      items: [
        { title: 'Ana Ekran' },
        { title: 'Antrenman Detayı' },
        { title: 'İstatistikler' },
        { title: 'Profil' }
      ]
    },
    stats: {
      items: [
        { label: 'Aktif Kullanıcı' },
        { label: 'Antrenman Kaydı' },
        { label: 'Uygulama Puanı' }
      ]
    },
    download: {
      title: 'Başlayın',
      titleHighlight: 'Hemen',
      subtitle: 'SpartaLog\'u indirin ve AI destekli fitness yolculuğunuza başlayın',
      features: {
        title: 'Özellikler',
        items: [
          'AI destekli antrenman analizi',
          'Görsel ilerleme grafikleri',
          'Sesli not kaydı',
          'Hedef belirleme ve takip',
          'Güvenli veri saklama',
          'Ücretsiz kullanım'
        ]
      },
      downloadButton: 'App Store\'dan İndir',
      requirements: 'iOS 13.0 veya üstü gereklidir'
    },
    footer: {
      copyright: '© 2024 SpartaLog. Tüm hakları saklıdır.',
      privacyPolicy: 'Gizlilik Politikası',
      termsConditions: 'Kullanım Şartları',
      contact: 'İletişim'
    }
  }
} as const

export function getTranslation(locale: Locale) {
  return translations[locale]
}
