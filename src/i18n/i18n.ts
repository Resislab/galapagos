import * as i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

import {TranslationMappingByLanguage, TranslationNamespaces} from "@/i18n/namespaceResources";
import {SUPPORTED_LANGUAGES_KEYS} from "@/i18n/supportedLanguages";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: Object.values(SUPPORTED_LANGUAGES_KEYS),
        fallbackLng: SUPPORTED_LANGUAGES_KEYS.FRENCH,
        interpolation: {
            escapeValue: false,
        },
        ns: Object.values(TranslationNamespaces),
        backend: {
            loadPath: "/src/locales/{{lng}}/{{ns}}.ts",
        },
        load: "languageOnly", // to ignore region : en-UK and en-US are then considered as en
        resources: TranslationMappingByLanguage,
    });

export default i18n;
