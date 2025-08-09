import {SUPPORTED_LANGUAGES_KEYS} from "@/i18n/supportedLanguages";
import {EN_AUTH} from "@/locales/en/auth.ts";
import {AUTH_TYPE} from "@/locales/types/auth.ts";
import {FR_AUTH} from "@/locales/fr/auth.ts";
import {SIDEBAR_TYPE} from "@/locales/types/sidebar.ts";
import {FR_SIDEBAR} from "@/locales/fr/sidebar.ts";
import {EN_SIDEBAR} from "@/locales/en/sidebar.ts";

export enum TranslationNamespaces {
    AUTH = "auth",
    SIDEBAR = "sidebar",
}

type NamespaceTypingByNamespace = {
    [TranslationNamespaces.AUTH]: AUTH_TYPE;
    [TranslationNamespaces.SIDEBAR]: SIDEBAR_TYPE;
};

export const TranslationMappingByLanguage: Record<SUPPORTED_LANGUAGES_KEYS, NamespaceTypingByNamespace> = {
    [SUPPORTED_LANGUAGES_KEYS.FRENCH]: {
        [TranslationNamespaces.AUTH]: FR_AUTH,
        [TranslationNamespaces.SIDEBAR]: FR_SIDEBAR,
    },
    [SUPPORTED_LANGUAGES_KEYS.ENGLISH]: {
        [TranslationNamespaces.AUTH]: EN_AUTH,
        [TranslationNamespaces.SIDEBAR]: EN_SIDEBAR,
    },
};
