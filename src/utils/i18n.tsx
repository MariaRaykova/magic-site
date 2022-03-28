import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import bg from './locales/bg.json';

i18n.use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: { translation: en },
      bg: { translation: bg },
    },
    lng: 'bg',
    returnEmptyString: false,
    fallbackLng: 'bg',
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;