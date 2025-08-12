import {useRoadmapPlans} from "@/hooks/roadmapPlans/useRoadmapPlans"
import {Box, IconButton, Text, VStack} from "@chakra-ui/react"
import {FiPlus} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {RouteUrls} from "@/router/route-urls.ts";


export const RoadmapPlanList = () => {
    const {data: roadmapPlans, isLoading, error} = useRoadmapPlans()
    const navigate = useNavigate()
    const {t} = useTranslation(TranslationNamespaces.ROADMAP_PLAN, {keyPrefix: "roadmapPlanList"});

    const roadmapList = isLoading ? [] : roadmapPlans
    if (error) {
        return <Text color="red.500">Erreur: {error.message}</Text>
    }

    return (
        <VStack align="stretch">
            <Box px={3} py={3} display="flex" justifyContent="flex-end">
                <IconButton
                    aria-label={t("createRoadmapPlan")}
                    size="lg"
                    bg="primary"
                    px={5}
                    variant="solid"
                    onClick={() => navigate(RouteUrls.ROADMAP_PLAN.CREATE())}
                >
                    <FiPlus/> {t("createRoadmapPlan")}
                </IconButton>
            </Box>
        </VStack>
    )
}
