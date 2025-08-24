'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronDown, Globe } from 'lucide-react'
import { locales, localeNames, localeFlags, getLocaleFromPathname, getPathnameWithoutLocale } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = getLocaleFromPathname(pathname)
  const pathnameWithoutLocale = getPathnameWithoutLocale(pathname)

  const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false)
    const newPath = newLocale === 'en' ? pathnameWithoutLocale : `/${newLocale}${pathnameWithoutLocale}`
    router.push(newPath)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{localeFlags[currentLocale]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
          <div className="py-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-800 transition-colors duration-200 ${
                  currentLocale === locale ? 'bg-gray-800 text-[#02cf68]' : 'text-gray-300'
                }`}
              >
                <span className="text-lg">{localeFlags[locale]}</span>
                <span className="text-sm font-medium">{localeNames[locale]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
