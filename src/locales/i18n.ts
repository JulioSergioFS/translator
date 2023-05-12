import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
//
import enLocales from './en.json';
import pt_BrLocales from './pt_Br.json';

// ----------------------------------------------------------------------

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
      pt_Br: { translations: pt_BrLocales }
    },
    lng: localStorage.getItem('i18nextLng') || 'pt_Br',
    fallbackLng: 'pt_Br',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
