import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Box, Button, Input, Stack, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"

import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {supabaseClient} from "@/api/client.ts";
import {RouteUrls} from "@/router/route-urls.ts";
import type {Database} from "@/database.types"
import {Field} from "@/components/ui/field.tsx";
import {checkRoadmapPlanNameExists} from "@/features/roadmapPlan/CreateRoadmapPlan/roadmap-plan.ts";


type RoadmapPlanInsert = Database["public"]["Tables"]["roadmap_plan"]["Insert"]


export const RoadmapPlanCreationForm = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid, isDirty},
    } = useForm<RoadmapPlanInsert>({
            mode: "onChange",
            reValidateMode: "onChange",
            criteriaMode: "all",
        }
    )
    const {t} = useTranslation(TranslationNamespaces.ROADMAP_PLAN, {keyPrefix: "roadmapPlanCreation"});
    const submitHandler = async (data: RoadmapPlanInsert) => {
        const {data: newRoadmapPlan, error} = await supabaseClient
            .from("roadmap_plan")
            .insert(data)
            .select()
            .single()

        if (error) {
            throw new Error(`Erreur lors de la création du roadmap plan: ${error.message}`)
        } else {
            navigate(RouteUrls.HOME())
        }
    }
    return (
        <Box width="sm">
            <form onSubmit={handleSubmit(submitHandler)} autoComplete={"off"} noValidate>
                <Stack gap="6" align="stretch">
                    <Text fontSize="xl">{t("formTitle")}</Text>
                    <Stack gap="3">
                        <Field label={t("labels.name")}
                               errorText={errors.name?.message}
                               required>
                            <Input
                                autoComplete={"off"} {...register("name", {
                                required: t("errors.required"),
                                validate: async (value) => {
                                    const exists = await checkRoadmapPlanNameExists(value)
                                    return exists ? t("errors.nameAlreadyExists", {name: value}) : true
                                }

                            })} />
                            {errors.name?.message &&
                                <Alert.Root status="error"><Alert.Description>{errors.name?.message}</Alert.Description></Alert.Root>}
                        </Field>
                    </Stack>
                    <Box px={3} py={3} display="flex" justifyContent="flex-end">
                        <Button disabled={isSubmitting || !isValid || !isDirty} type="submit" bg="primary">
                            {isSubmitting ? t("submitButton.submitting") : t("submitButton.toSubmit")}
                        </Button>
                    </Box>
                </Stack>
            </form>
        </Box>

    );
};
