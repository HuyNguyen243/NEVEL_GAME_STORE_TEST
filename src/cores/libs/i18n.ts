import en from "@/shared/data/languages/en.json";
import vi from "@/shared/data/languages/vi.json";
import { LANGUAGE_TYPES } from "@/shared/types/languageTypes";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { language } from "@/cores/utils/language";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
  lng: language.get(),
  fallbackLng: LANGUAGE_TYPES.EN,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
