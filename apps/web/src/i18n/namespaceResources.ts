import {SUPPORTED_LANGUAGES_KEYS} from "@/i18n/supportedLanguages";
import {EN_AUTH} from "@/locales/en/auth.ts";
import {AUTH_TYPE} from "@/locales/types/auth.ts";
import {FR_AUTH} from "@/locales/fr/auth.ts";
import {SIDEBAR_TYPE} from "@/locales/types/sidebar.ts";
import {FR_SIDEBAR} from "@/locales/fr/sidebar.ts";
import {EN_SIDEBAR} from "@/locales/en/sidebar.ts";
import {ROADMAP_PLAN_TYPE} from "@/locales/types/roadmapPlan.ts";
import {EN_ROADMAP_PLAN} from "@/locales/en/roadmapPlan.ts";
import {FR_ROADMAP_PLAN} from "@/locales/fr/roadmapPlan.ts";

export enum TranslationNamespaces {
    AUTH = "auth",
    SIDEBAR = "sidebar",
    ROADMAP_PLAN = "roadmap-plan"
}

type NamespaceTypingByNamespace = {
    [TranslationNamespaces.AUTH]: AUTH_TYPE;
    [TranslationNamespaces.SIDEBAR]: SIDEBAR_TYPE;
    [TranslationNamespaces.ROADMAP_PLAN]: ROADMAP_PLAN_TYPE;
};

export const TranslationMappingByLanguage: Record<SUPPORTED_LANGUAGES_KEYS, NamespaceTypingByNamespace> = {
    [SUPPORTED_LANGUAGES_KEYS.FRENCH]: {
        [TranslationNamespaces.AUTH]: FR_AUTH,
        [TranslationNamespaces.SIDEBAR]: FR_SIDEBAR,
        [TranslationNamespaces.ROADMAP_PLAN]: FR_ROADMAP_PLAN,
    },
    [SUPPORTED_LANGUAGES_KEYS.ENGLISH]: {
        [TranslationNamespaces.AUTH]: EN_AUTH,
        [TranslationNamespaces.SIDEBAR]: EN_SIDEBAR,
        [TranslationNamespaces.ROADMAP_PLAN]: EN_ROADMAP_PLAN,
    },
};
