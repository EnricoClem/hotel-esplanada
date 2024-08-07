import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'
import it from './locales/it.json'

function loadLocaleMessages() {
  const locales = [{ it: it }, { de: de }, { en: en }]
  const messages = {}
  locales.forEach(lang => {
    const key = Object.keys(lang)
    messages[key] = lang[key] 
  })
  return messages
}

export default createI18n({
  locale: 'it',
  fallbackLocale: 'it',
  messages: loadLocaleMessages()
})