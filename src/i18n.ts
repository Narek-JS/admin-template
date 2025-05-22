import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

import enTranslation from "./locales/en.json";
import hyTranslation from "./locales/hy.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: enTranslation,
      hy: hyTranslation,
    },
  });

export default i18n;
