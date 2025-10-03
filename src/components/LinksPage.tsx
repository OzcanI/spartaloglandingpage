'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Download,
  Smartphone,
  Globe,
  Mail,
  MessageCircle,
  ExternalLink,
  ArrowLeft,
  Star,
  Users,
  Zap,
  Brain,
  CheckCircle,
  Play
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getLocaleFromPathname } from '@/lib/i18n'
import { getTranslation } from '@/lib/translations'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from '@/components/LanguageSwitcher'

interface LinksPageProps {
  locale: 'tr' | 'en'
}

// Apple Logo SVG Component
const AppleLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

// Instagram Logo SVG Component
const InstagramLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

// TikTok Logo SVG Component
const TikTokLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function LinksPage({ locale }: LinksPageProps) {
  const t = getTranslation(locale)

  const downloadLinks = [
    {
      id: 'app-store',
      title: 'Download on App Store',
      icon: AppleLogo,
      url: 'https://apps.apple.com/app/id6751474255'
    },
    /*{
      id: 'play-store',
      title: 'Download on Play Store',
      icon: Play,
      url: 'https://play.google.com/store/apps/details?id=com.spartalog.app'
    },*/
    {
      id: 'website',
      title: 'Visit Website',
      emoji: '🌐',
      url: 'https://spartalog.app'
    }
  ]

  const socialLinks = [
    {
      id: 'instagram',
      title: 'Follow on Instagram',
      icon: InstagramLogo,
      url: locale === 'tr' ? 'https://www.instagram.com/spartalogapp_tr/' : 'https://www.instagram.com/spartalogapp/'
    },
    {
      id: 'tiktok',
      title: 'Follow on TikTok',
      icon: TikTokLogo,
      url: locale === 'tr' ? 'https://www.tiktok.com/@spartalog_tr' : 'https://www.tiktok.com/@spartalog'
    }
  ]

  const supportLinks = [
    {
      id: 'contact',
      title: 'Contact Us',
      emoji: '📧',
      url: locale === 'tr' ? '/contact' : '/contact-en'
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      emoji: '🔒',
      url: locale === 'tr' ? '/privacy-policy' : '/privacy-policy-en'
    },
    {
      id: 'terms',
      title: 'Terms of Service',
      emoji: '📋',
      url: locale === 'tr' ? '/terms' : '/terms-en'
    }
  ]

  const features = [
    {
      emoji: '🧠',
      title: locale === 'tr' ? 'AI Analizi' : 'AI Analysis',
      description: locale === 'tr' ? 'Antrenmanlarınızı AI ile analiz edin' : 'Analyze your workouts with AI'
    },
    {
      emoji: '⚡',
      title: locale === 'tr' ? 'Hızlı Kayıt' : 'Quick Recording',
      description: locale === 'tr' ? 'Sesli notlarla hızlıca kayıt yapın' : 'Record quickly with voice notes'
    },
    {
      emoji: '👥',
      title: locale === 'tr' ? 'İlerleme Takibi' : 'Progress Tracking',
      description: locale === 'tr' ? 'Fitness hedeflerinizi takip edin' : 'Track your fitness goals'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#02cf68]/10 via-transparent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
             {/* Back Button and Language Switcher */}
             <div className="flex justify-between items-center mb-8">
               <Link 
                 href={locale === 'tr' ? '/links' : '/links-en'}
                 className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#02cf68] transition-colors"
               >
                 <ArrowLeft size={20} />
                 <span>{locale === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}</span>
               </Link>
               
               <LanguageSwitcher yOffset={220}/>
             </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/images/logo.webp"
                  alt="SpartaLog"
                  width={80}
                  height={80}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#02cf68] rounded-full flex items-center justify-center">
                  <Star size={16} className="text-black" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#02cf68]">SpartaLog</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {locale === 'tr' 
                ? 'AI destekli fitness takip uygulaması. Antrenmanlarınızı analiz edin, hedeflerinize ulaşın.'
                : 'AI-powered fitness tracking app. Analyze your workouts, achieve your goals.'
              }
            </p>

            {/* Stats */}
            {/* <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#02cf68]">10K+</div>
                <div className="text-sm text-gray-400">{locale === 'tr' ? 'Kullanıcı' : 'Users'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#02cf68]">4.8★</div>
                <div className="text-sm text-gray-400">{locale === 'tr' ? 'Puan' : 'Rating'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#02cf68]">50K+</div>
                <div className="text-sm text-gray-400">{locale === 'tr' ? 'Antrenman' : 'Workouts'}</div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Download Links */}
          <div className="space-y-3">
            {downloadLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block p-4 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-[#02cf68]/50 hover:bg-gray-800/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {link.icon ? (
                      <link.icon size={20} className="text-white group-hover:text-[#02cf68] transition-colors" />
                    ) : (
                      <span className="text-2xl">{link.emoji}</span>
                    )}
                    <span className="text-white font-medium group-hover:text-[#02cf68] transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-[#02cf68] transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-300 text-center mb-4">
              {locale === 'tr' ? 'Sosyal Medya' : 'Social Media'}
            </h3>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + downloadLinks.length) }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block p-4 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-[#02cf68]/50 hover:bg-gray-800/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <link.icon size={20} className="text-white group-hover:text-[#02cf68] transition-colors" />
                    <span className="text-white font-medium group-hover:text-[#02cf68] transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-[#02cf68] transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Support Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-300 text-center mb-4">
              {locale === 'tr' ? 'Destek' : 'Support'}
            </h3>
            {supportLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + downloadLinks.length + socialLinks.length) }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block p-4 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-[#02cf68]/50 hover:bg-gray-800/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{link.emoji}</span>
                    <span className="text-white font-medium group-hover:text-[#02cf68] transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-[#02cf68] transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      {/*<div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'tr' ? 'Neden SpartaLog?' : 'Why SpartaLog?'}
            </h2>
            <p className="text-gray-300">
              {locale === 'tr' 
                ? 'AI teknolojisi ile güçlendirilmiş fitness deneyimi'
                : 'AI-powered fitness experience'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#02cf68] flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>*/}

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/images/logo.webp"
              alt="SpartaLog"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="text-lg font-bold text-[#02cf68]">
              SpartaLog
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 SpartaLog. {locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}
