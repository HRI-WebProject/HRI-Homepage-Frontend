import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./translation.en";
import translationKo from "./translation.ko";

const resource = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: sessionStorage.getItem("lang") || "ko",
  fallbackLng: {
    en: ["en"],
    default: ["ko"],
  },
  defaultNS: "translation",
  ns: "translation",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
