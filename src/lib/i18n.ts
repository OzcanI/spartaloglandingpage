export const locales = ['en', 'tr'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe'
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  tr: '🇹🇷'
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}

export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  return locales.includes(locale) ? `/${segments.slice(2).join('/')}` : pathname
}
