'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { API_URL } from '@/lib/api'

interface ContactFormProps {
  language: 'tr' | 'en'
  backHref: string
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
  general?: string
}

const translations = {
  tr: {
    backButton: 'Ana Sayfaya Dön',
    title: 'İletişim',
    subtitle: 'SpartaLog ile ilgili sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin.',
    contactInfo: 'İletişim Bilgileri',
    email: 'E-posta',
    emailDesc: 'En hızlı yanıt için e-posta gönderin',
    address: 'Adres',
    addressDesc: 'Geliştirici ofisi',
    responseTime: 'Yanıt Süresi',
    responseTimeDesc: 'İş günleri içinde yanıt veriyoruz',
    sendMessage: 'Mesaj Gönder',
    fullName: 'Ad Soyad',
    fullNamePlaceholder: 'Adınız ve soyadınız',
    emailLabel: 'E-posta',
    emailPlaceholder: 'ornek@email.com',
    subject: 'Konu',
    selectSubject: 'Konu seçin',
    general: 'Genel Soru',
    bug: 'Hata Bildirimi',
    feature: 'Özellik Önerisi',
    support: 'Teknik Destek',
    other: 'Diğer',
    message: 'Mesaj',
    messagePlaceholder: 'Mesajınızı buraya yazın...',
    submit: 'Mesaj Gönder',
    note: 'Not: Bu form şu anda demo amaçlıdır. Gerçek iletişim için lütfen e-posta adresimizi kullanın.',
    aboutTitle: 'SpartaLog Hakkında',
    aboutDesc: 'SpartaLog, AI teknolojisi ile güçlendirilmiş fitness takip uygulamasıdır. Antrenmanlarınızı analiz eder, ilerlemenizi takip eder ve hedeflerinize ulaşmanıza yardımcı olur.',
    successMessage: 'Mesajınız başarıyla gönderildi!',
    errorMessage: 'Bir hata oluştu. Lütfen tekrar deneyin.',
    loading: 'Gönderiliyor...',
    validationErrors: {
      name: 'Ad 2-100 karakter arasında olmalıdır',
      email: 'Geçerli bir e-posta adresi giriniz',
      subject: 'Konu 5-200 karakter arasında olmalıdır',
      message: 'Mesaj 10-5000 karakter arasında olmalıdır'
    }
  },
  en: {
    backButton: 'Back to Home',
    title: 'Contact',
    subtitle: 'Get in touch with us for questions, suggestions, or feedback about SpartaLog.',
    contactInfo: 'Contact Information',
    email: 'Email',
    emailDesc: 'Send email for fastest response',
    address: 'Address',
    addressDesc: 'Developer office',
    responseTime: 'Response Time',
    responseTimeDesc: 'We respond within business days',
    sendMessage: 'Send Message',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'example@email.com',
    subject: 'Subject',
    selectSubject: 'Select subject',
    general: 'General Question',
    bug: 'Bug Report',
    feature: 'Feature Request',
    support: 'Technical Support',
    other: 'Other',
    message: 'Message',
    messagePlaceholder: 'Write your message here...',
    submit: 'Send Message',
    note: 'Note: This form is currently for demo purposes. Please use our email address for real contact.',
    aboutTitle: 'About SpartaLog',
    aboutDesc: 'SpartaLog is an AI-powered fitness tracking application. It analyzes your workouts, tracks your progress, and helps you achieve your fitness goals.',
    successMessage: 'Your message has been sent successfully!',
    errorMessage: 'An error occurred. Please try again.',
    loading: 'Sending...',
    validationErrors: {
      name: 'Name must be between 2-100 characters',
      email: 'Please enter a valid email address',
      subject: 'Subject must be between 5-200 characters',
      message: 'Message must be between 10-5000 characters'
    }
  }
}

export default function ContactForm({ language, backHref }: ContactFormProps) {
  const t = translations[language]
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      newErrors.name = t.validationErrors.name
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t.validationErrors.email
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 5 || formData.subject.trim().length > 200) {
      newErrors.subject = t.validationErrors.subject
    }

    if (!formData.message.trim() || formData.message.trim().length < 10 || formData.message.trim().length > 5000) {
      newErrors.message = t.validationErrors.message
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('handleSubmit', e)
    if (e?.preventDefault) {
      e.preventDefault()
    }
    console.log('e.preventDefault')
    
    if (!validateForm()) {
      console.log('validateForm')
      return
    }
    console.log('validatedForm')
    setIsSubmitting(true)
    setSubmitStatus('idle')
    console.log('setIsSubmitting', API_URL)
    try {
      console.log('API_URL', API_URL)
      const response = await fetch(API_URL + '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
      } else {
        const errorData = await response.json()
        setErrors({ general: errorData.error || t.errorMessage })
        setSubmitStatus('error')
      }
    } catch (error) {
      setErrors({ general: t.errorMessage })
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear field-specific error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href={backHref}
            className="inline-flex items-center space-x-2 text-[#02cf68] hover:text-[#02cf68]/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t.backButton}</span>
          </Link>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#02cf68] mb-4">{t.title}</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-6">{t.contactInfo}</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <Mail className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{t.email}</h3>
                    <p className="text-gray-300">ibosnfs1997@gmail.com</p>
                    <p className="text-sm text-gray-400 mt-1">{t.emailDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <MapPin className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{t.address}</h3>
                    <p className="text-gray-300">{language === 'tr' ? 'Bursa, Türkiye' : 'Bursa, Turkey'}</p>
                    <p className="text-sm text-gray-400 mt-1">{t.addressDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                    <Phone className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{t.responseTime}</h3>
                    <p className="text-gray-300">{language === 'tr' ? '24-48 saat' : '24-48 hours'}</p>
                    <p className="text-sm text-gray-400 mt-1">{t.responseTimeDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-semibold text-[#02cf68] mb-6">{t.sendMessage}</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-900 border border-green-700 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-green-300">{t.successMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-900 border border-red-700 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="text-red-400" size={20} />
                  <span className="text-red-300">{errors.general}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder={t.fullNamePlaceholder}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder={t.emailPlaceholder}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:border-[#02cf68] transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-gray-600'
                    }`}
                    required
                  >
                    <option value="">{t.selectSubject}</option>
                    <option value="general">{t.general}</option>
                    <option value="bug report">{t.bug}</option>
                    <option value="feature">{t.feature}</option>
                    <option value="support">{t.support}</option>
                    <option value="other">{t.other}</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68] transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder={t.messagePlaceholder}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#02cf68] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#02cf68]/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? t.loading : t.submit}</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-300">
                  {t.note}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#02cf68] mb-4">{t.aboutTitle}</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {t.aboutDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
