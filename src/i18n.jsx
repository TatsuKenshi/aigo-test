import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationSR from "../src/locales/sr/translation.json";
import translationEN from "../src/locales/en/translation.json";

// the translations
const resources = {
  sr: {
    translation: translationSR,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "en", preserves language between reloads
    fallbackLng: "en", // use sr if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
