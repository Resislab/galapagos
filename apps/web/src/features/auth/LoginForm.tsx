import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useCreateAccessToken} from "@/features/auth/createAccessToken.ts";
import {Alert, Box, Button, Input, Stack, Text} from "@chakra-ui/react";

import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {ApiError} from "@/api/types.ts";
import {Field as ChakraField} from "@/components/ui/field.tsx";
import {RiArrowRightLine} from "react-icons/ri";

export type LoginFormInputs = {
    username: string;
    password: string;
}

export const LoginForm = () => {
    const [loginError, setLoginError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting, isValid, isDirty},
    } = useForm<LoginFormInputs>({
            mode: "onChange",
            criteriaMode: "all",
            defaultValues: {
                username: "",
                password: ""
            }

        }
    )
    const {createAccessToken} = useCreateAccessToken(
        {
            config: {
                onError: (error: ApiError) => {
                    reset(undefined, {keepValues: true});
                    switch (error.status) {
                        case 400:
                            setLoginError(t("errors.invalidCredentials"))
                            break
                        default:
                            setLoginError(t("errors.default"))
                    }
                }
            }
        }
    )
    const {t} = useTranslation(TranslationNamespaces.LOGIN, {keyPrefix: "loginPage"});
    const submitHandler = (data: LoginFormInputs) => {
        setLoginError(null);
        createAccessToken(data);
    }
    return (
        <Box width="sm">
            <form onSubmit={handleSubmit(submitHandler)} autoComplete={"off"} noValidate>
                <Stack gap="6">
                    <Text fontSize="xl">{t("formTitle")}</Text>
                    <Stack gap="3">
                        <ChakraField label={t("username")} errorText={t("errors.required")}
                                     required>
                            <Input
                                autoComplete={"off"} {...register("username", {required: t("errors.required")})} />
                        </ChakraField>

                        <ChakraField label={t("password")} errorText={t("errors.required")}
                                     invalid={!!errors.password} required>
                            <Input
                                autoComplete={"off"} {...register("password", {required: t("errors.required")})} />
                        </ChakraField>
                    </Stack>
                    {
                        loginError && (
                            <Alert.Root status="error">
                                <Alert.Indicator/>
                                <Alert.Content>
                                    <Alert.Title>{t("errors.authenticationErrorTitle")}</Alert.Title>
                                    <Alert.Description>
                                        {loginError}
                                    </Alert.Description>
                                </Alert.Content>
                            </Alert.Root>
                        )
                    }
                    <Button disabled={isSubmitting || !isValid || !isDirty} type="submit" bg="primary">
                        {isSubmitting ? t("logInButton.submitting") : t("logInButton.toSubmit")} <RiArrowRightLine/>
                    </Button>
                </Stack>
            </form>
        </Box>

    );
};
