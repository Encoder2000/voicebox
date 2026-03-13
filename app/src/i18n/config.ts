import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './locales/es.json';
import enTranslation from './locales/en.json';

/**
 * Instancia de i18n exportada para ser compartida entre main.tsx (I18nextProvider)
 * y cualquier componente que necesite acceso directo (ej: cambio de idioma).
 *
 * Usamos la instancia global de i18next en lugar de createInstance() para
 * garantizar que react-i18next encuentre la instancia a través del contexto
 * cuando se usa useTranslation() en componentes hijos.
 */
i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslation },
      en: { translation: enTranslation },
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
