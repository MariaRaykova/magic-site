import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import en from './locales/en.json';
import bg from './locales/bg.json';

i18n.use(initReactI18next)// passes i18n down to react-i18next
  .init({
    debug: true,
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: { translation: en },
      bg: { translation: bg },
    },
    lng: 'bg', // if you're using a language detector, do not define the lng option
    // fallbackLng: false,
    returnEmptyString: false,
    fallbackLng: 'bg',
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
export default i18n;