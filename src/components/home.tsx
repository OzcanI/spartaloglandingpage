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
  X,
  ChevronLeft,
  ChevronRight,
  Send,
  MessageCircle
} from 'lucide-react'
import Image from 'next/image'
import { getLocaleFromPathname } from '@/lib/i18n'
import { getTranslation } from '@/lib/translations'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { usePathname } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
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
                  src="/images/logo.webp"
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
               <a href="#ai-chat" className="hover:text-[#02cf68] transition-colors duration-300">
                 {t.nav.aiChat}
               </a>
               <a href="#screenshots" className="hover:text-[#02cf68] transition-colors duration-300">
                 {t.nav.screenshots}
               </a>
               <a href="https://apps.apple.com/tr/app/spartalog/id6751474255" target="_blank" className="hover:text-[#02cf68] transition-colors duration-300">
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
                 href="#ai-chat" 
                 className="block hover:text-[#02cf68] transition-colors duration-300"
                 onClick={() => setIsMenuOpen(false)}
               >
                 {t.nav.aiChat}
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
              <Link href="https://apps.apple.com/tr/app/spartalog/id6751474255" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full cursor-pointer sm:w-auto bg-[#02cf68] text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-[#02cf68]/90 transition-all duration-300 group"
                >
                  <Download size={20} />
                    <span>{t.hero.downloadButton}</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              {/* <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-[#02cf68] hover:text-[#02cf68] transition-all duration-300 group bg-gray-900 flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>{t.hero.watchDemoButton}</span>
              </motion.button> */}
            </motion.div>

            {/* Stats Preview */}
            {/* <motion.div 
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
            </motion.div> */}
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
              { icon: Zap }
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

       {/* AI Chat Section */}
       <section id="ai-chat" className="py-20 px-4 sm:px-6 lg:px-8 relative">
         <div className="max-w-7xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
               {t.aiChat.title} <span className="text-[#02cf68]">{t.aiChat.titleHighlight}</span>
             </h2>
             <p className="text-lg sm:text-xl text-gray-300 mb-4">
               {t.aiChat.subtitle}
             </p>
             <p className="text-base text-gray-400 max-w-3xl mx-auto">
               {t.aiChat.description}
             </p>
           </motion.div>

           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* AI Chat Features */}
             <div className="space-y-6">
               {t.aiChat.features.map((feature, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   viewport={{ once: true }}
                   className="flex items-start space-x-4"
                 >
                   <div className="w-12 h-12 rounded-lg bg-[#02cf68] p-3 flex-shrink-0">
                     <Brain className="w-full h-full text-black" />
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                     <p className="text-gray-300">{feature.description}</p>
                   </div>
                 </motion.div>
               ))}
             </div>

             {/* AI Chat Demo/Preview */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
                 {/* Chat Header */}
                 <div className="flex items-center space-x-3 mb-6">
                   <div className="w-10 h-10 rounded-full bg-[#02cf68] flex items-center justify-center">
                     <Brain className="w-6 h-6 text-black" />
                   </div>
                   <div>
                     <h3 className="text-lg font-semibold">SpartaLog AI</h3>
                     <p className="text-sm text-gray-400">
                       {locale === 'tr' ? 'Çevrimiçi • Antrenmanınızı analiz ediyor' : 'Online • Analyzing your workout'}
                     </p>
                   </div>
                 </div>

                 {/* Chat Messages */}
                 <div className="space-y-4 mb-6">
                   <div className="flex justify-end">
                     <div className="bg-[#02cf68] text-black px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                       <p className="text-sm">
                         {locale === 'tr' 
                           ? 'Son antrenmanımda bench press yaptım, 3 set 8 tekrar. Nasıl geliştirebilirim?'
                           : 'I did bench press in my last workout, 3 sets 8 reps. How can I improve?'
                         }
                       </p>
                     </div>
                   </div>
                   
                   <div className="flex justify-start">
                     <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
                       <p className="text-sm">
                         {locale === 'tr'
                           ? 'Harika! Bench press performansınızı analiz ettim. Son 3 haftada güç artışı var. Şu önerileri veriyorum:'
                           : 'Great! I analyzed your bench press performance. There\'s strength improvement in the last 3 weeks. Here are my recommendations:'
                         }
                         {locale === 'tr'
                          ? <><br/>1. Ağırlığı %5 artırın <br/>2. 4. set ekleyin <br/>3. Dumbbell bench press ile varyasyon yapın</>
                          : <><br/>1. Increase weight by 5% <br/>2. Add a 4th set <br/>3. Do variations with dumbbell bench press</>
                        }
                       </p>
                     </div>
                   </div>
                 </div>

                 {/* Chat Input */}
                 <div className="flex space-x-2">
                   <input
                     type="text"
                     placeholder={locale === 'tr' ? 'AI\'ya sorun...' : 'Ask AI...'}
                     className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#02cf68]"
                   />
                   <button className="bg-[#02cf68] text-black px-4 py-2 rounded-lg hover:bg-[#02cf68]/90 transition-colors">
                     <Send size={20} />
                   </button>
                 </div>

                 {/* CTA Buttons */}
                 <div className="flex space-x-3 mt-6">
                  <Link href="https://apps.apple.com/tr/app/spartalog/id6751474255" target="_blank" className="flex flex-1 justify-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-[#02cf68] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#02cf68]/90 transition-colors flex items-center justify-center space-x-2"
                    >
                        <MessageCircle size={20} />
                     <span>{t.aiChat.cta}</span>
                    </motion.button>
                   </Link>
                 </div>
               </div>

               {/* Floating Elements */}
               <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#02cf68] rounded-full opacity-20 animate-pulse"></div>
               <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#02cf68] rounded-full opacity-30 animate-pulse delay-1000"></div>
             </motion.div>
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

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={setSwiperInstance}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              effect="slide"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="screenshots-swiper"
            >
              {[
                { src: "/images/Slice 1.png", alt: "Main Screen", title: "Main Screen" },
                { src: "/images/Slice 2.png", alt: "Workout Note", title: "Workout Note" },
                { src: "/images/Slice 3.png", alt: "SpartaAI", title: "SpartaAI" },
                { src: "/images/Slice 4.png", alt: "Best Companion", title: "Best Companion" },
                { src: "/images/Slice 5.png", alt: "Statistics", title: "Statistics" },
                { src: "/images/Slice 6.png", alt: "Workout History", title: "Workout History" },
                { src: "/images/Slice 7.png", alt: "Workout Details", title: "Workout Details" }
              ].map((screenshot, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="relative group h-full"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={400}
                        height={800}
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base bg-black/50 px-3 py-1 rounded-lg">
                          {screenshot.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <button 
              onClick={() => swiperInstance?.slidePrev()}
              disabled={!swiperInstance}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => swiperInstance?.slideNext()}
              disabled={!swiperInstance}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
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
                  <Link href="https://apps.apple.com/tr/app/spartalog/id6751474255" target="_blank">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full cursor-pointer sm:w-auto bg-[#02cf68] text-black px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 mx-auto hover:bg-[#02cf68]/90 transition-all duration-300 group"
                    >
                      <Smartphone size={20} />
                      <span>{t.download.downloadButton}</span>
                      <ArrowRight size={20} />
                    </motion.button>
                  </Link>
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
                src="/images/logo.webp"
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
              <a 
                href={locale === 'tr' ? '/contact' : '/contact-en'} 
                className="hover:text-[#02cf68] transition-colors"
              >
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