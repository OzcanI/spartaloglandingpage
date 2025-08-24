'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  Shield,
  Download,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Smartphone,
  BarChart3,
  Dumbbell,
  Sparkles,
  Menu,
  X
} from 'lucide-react'
import Image from 'next/image'
import { getLocaleFromPathname } from '@/lib/i18n'
import { getTranslation } from '@/lib/translations'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { usePathname } from 'next/navigation'

export default function TurkishHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const t = getTranslation(locale)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="SpartaLog"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <span className="text-xl font-bold text-[#02cf68]">
                SpartaLog
              </span>
            </motion.div>
            
            {/* Desktop Menu */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#features" className="hover:text-[#02cf68] transition-colors duration-300">
                {t.nav.features}
              </a>
              <a href="#screenshots" className="hover:text-[#02cf68] transition-colors duration-300">
                {t.nav.screenshots}
              </a>
              <a href="#download" className="hover:text-[#02cf68] transition-colors duration-300">
                {t.nav.download}
              </a>
              <LanguageSwitcher />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-4 border-t border-gray-800">
              <a 
                href="#features" 
                className="block hover:text-[#02cf68] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.features}
              </a>
              <a 
                href="#screenshots" 
                className="block hover:text-[#02cf68] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.screenshots}
              </a>
              <a 
                href="#download" 
                className="block hover:text-[#02cf68] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.download}
              </a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-[#02cf68]/10 border border-[#02cf68]/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#02cf68]" />
              <span className="text-[#02cf68] text-sm font-medium">{t.hero.badge}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <motion.span 
                className="text-[#02cf68]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {t.hero.title}
              </motion.span>
              <br />
              <motion.span 
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {t.hero.subtitle}
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#02cf68] text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-[#02cf68]/90 transition-all duration-300 group"
              >
                <Download size={20} />
                <span>{t.hero.downloadButton}</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-[#02cf68] hover:text-[#02cf68] transition-all duration-300 group bg-gray-900 flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>{t.hero.watchDemoButton}</span>
              </motion.button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12 text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#02cf68]">10K+</div>
                <div className="text-sm text-gray-400">{t.hero.stats.users}</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#02cf68]">50K+</div>
                <div className="text-sm text-gray-400">{t.hero.stats.workouts}</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#02cf68]">4.8★</div>
                <div className="text-sm text-gray-400">{t.hero.stats.rating}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.features.title} <span className="text-[#02cf68]">{t.features.titleHighlight}</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Brain },
              { icon: TrendingUp },
              { icon: Target },
              { icon: Users },
              { icon: Zap },
              { icon: Shield }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#02cf68] transition-all duration-300 hover:bg-gray-800/70 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-2 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-full h-full text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.features.items[index].title}</h3>
                <p className="text-gray-300">{t.features.items[index].description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.screenshots.title} <span className="text-[#02cf68]">{t.screenshots.titleHighlight}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              {t.screenshots.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { src: "/images/1255@3x.png", alt: "Main Screen" },
              { src: "/images/1256@3x.png", alt: "Workout Detail" },
              { src: "/images/1257@3x.png", alt: "Statistics" },
              { src: "/images/1258@3x.png", alt: "Profile" }
            ].map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={400}
                    height={800}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base">
                      {t.screenshots.items[index].title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              { number: "10K+", icon: Users },
              { number: "50K+", icon: Dumbbell },
              { number: "4.8", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-800 border border-gray-700"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#02cf68] mb-2 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
                  {stat.number}
                </div>
                <p className="text-gray-300 text-base sm:text-lg">{t.stats.items[index].label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.download.title} <span className="text-[#02cf68]">{t.download.titleHighlight}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              {t.download.subtitle}
            </p>
            
            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">{t.download.features.title}</h3>
                  <ul className="space-y-3">
                    {t.download.features.items.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#02cf68] flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-[#02cf68] text-black px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 mx-auto hover:bg-[#02cf68]/90 transition-all duration-300 group"
                  >
                    <Smartphone size={20} />
                    <span>{t.download.downloadButton}</span>
                    <ArrowRight size={20} />
                  </motion.button>
                  <p className="text-xs sm:text-sm text-gray-400 mt-4">
                    {t.download.requirements}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/logo.png"
                alt="SpartaLog"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-[#02cf68]">
                SpartaLog
              </span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-center sm:text-left">
              <a 
                href={locale === 'tr' ? '/privacy-policy' : '/privacy-policy-en'} 
                className="hover:text-[#02cf68] transition-colors"
              >
                {t.footer.privacyPolicy}
              </a>
              <a 
                href={locale === 'tr' ? '/terms' : '/terms-en'} 
                className="hover:text-[#02cf68] transition-colors"
              >
                {t.footer.termsConditions}
              </a>
              <a href="mailto:ibosnfs1997@gmail.com" className="hover:text-[#02cf68] transition-colors">
                {t.footer.contact}
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
