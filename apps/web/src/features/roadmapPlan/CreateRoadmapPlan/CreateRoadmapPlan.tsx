import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {useTabName} from "@/hooks/tabName.ts";
import React from "react";
import {RoadmapPlanCreationForm} from "@/features/roadmapPlan/CreateRoadmapPlan/RoadmapPlanCreationForm.tsx";

export const CreateRoadmapPlan = () => {
    const {t} = useTranslation(TranslationNamespaces.ROADMAP_PLAN, {keyPrefix: "roadmapPlanCreation"})
    useTabName(t("tabName"))
    return (
        <RoadmapPlanCreationForm/>
    )
}