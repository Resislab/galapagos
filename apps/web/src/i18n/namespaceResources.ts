import {SUPPORTED_LANGUAGES_KEYS} from "@/i18n/supportedLanguages";
import {EN_LOGIN} from "@/locales/en/login.ts";
import {LOGIN_TYPE} from "@/locales/types/login.ts";
import {FR_LOGIN} from "@/locales/fr/login.ts";

export enum TranslationNamespaces {
    LOGIN = "login",
}

type NamespaceTypingByNamespace = {
    [TranslationNamespaces.LOGIN]: LOGIN_TYPE;
};

export const TranslationMappingByLanguage: Record<SUPPORTED_LANGUAGES_KEYS, NamespaceTypingByNamespace> = {
    [SUPPORTED_LANGUAGES_KEYS.FRENCH]: {
        [TranslationNamespaces.LOGIN]: FR_LOGIN,
    },
    [SUPPORTED_LANGUAGES_KEYS.ENGLISH]: {
        [TranslationNamespaces.LOGIN]: EN_LOGIN,
    },
};
