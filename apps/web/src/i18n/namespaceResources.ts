import {SUPPORTED_LANGUAGES_KEYS} from "@/i18n/supportedLanguages";
import {EN_AUTH} from "@/locales/en/auth.ts";
import {AUTH_TYPE} from "@/locales/types/auth.ts";
import {FR_AUTH} from "@/locales/fr/auth.ts";

export enum TranslationNamespaces {
    AUTH = "auth",
}

type NamespaceTypingByNamespace = {
    [TranslationNamespaces.AUTH]: AUTH_TYPE;
};

export const TranslationMappingByLanguage: Record<SUPPORTED_LANGUAGES_KEYS, NamespaceTypingByNamespace> = {
    [SUPPORTED_LANGUAGES_KEYS.FRENCH]: {
        [TranslationNamespaces.AUTH]: FR_AUTH,
    },
    [SUPPORTED_LANGUAGES_KEYS.ENGLISH]: {
        [TranslationNamespaces.AUTH]: EN_AUTH,
    },
};
