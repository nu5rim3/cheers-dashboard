import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EnglishTranslations from "./lang-json/en.json";
import SinhalaTranslations from "./lang-json/sin.json";

export type LanguageCodesType = keyof typeof resources;

const resources = {
    en: { translation: EnglishTranslations },
    sin: { translation: SinhalaTranslations },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
