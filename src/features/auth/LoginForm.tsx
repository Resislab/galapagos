import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useCreateAccessToken} from "@/features/auth/createAccessToken.ts";
import {Alert, Box, Button, Field, Input, Stack, Text} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {ApiError} from "@/api/types.ts";

export type LoginFormInputs = {
    username: string;
    password: string;
    organization_name: string;
};

export const LoginForm = () => {

    const [loginError, setLoginError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},
    } = useForm<LoginFormInputs>({
            mode: "onChange",
            criteriaMode: "all"
        }
    );

    const {createAccessToken} = useCreateAccessToken(
        {
            config: {
                onError: (error: ApiError) => {
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
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} autoComplete={"off"} noValidate>
            <Box bg="background.subtle">
                <Stack gap="7" maxW="sm">
                    <Text fontSize="xl">{t("formTitle")}</Text>
                    <Stack gap="4_5" align="flex-start" maxW="sm">
                        <Field.Root invalid={!!errors.organization_name} required>
                            <Field.Label>{t("organizationName")}<Field.RequiredIndicator/></Field.Label>
                            <Input
                                autoComplete={"off"} {...register("organization_name", {required: t("errors.required")})} />
                            {errors.organization_name && (
                                <Field.ErrorText>{t("errors.required")}</Field.ErrorText>
                            )}
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>{t("username")}<Field.RequiredIndicator/></Field.Label>
                            <Input autoComplete={"off"} {...register("username", {required: t("errors.required")})} />
                            {errors.username && (
                                <Field.ErrorText>{t("errors.required")}</Field.ErrorText>
                            )}
                        </Field.Root>
                        <Field.Root invalid={!!errors.password} required>
                            <Field.Label>{t("password")}<Field.RequiredIndicator/></Field.Label>
                            <Input type={"password"}
                                   autoComplete={"off"} {...register("password", {required: t("errors.required")})} />
                            {errors.username && (
                                <Field.ErrorText>{t("errors.required")}</Field.ErrorText>
                            )}
                        </Field.Root>
                    </Stack>
                    <Button disabled={isSubmitting || !isValid} type="submit" bg="primary">
                        {isSubmitting ? t("logInButton.submitting") : t("logInButton.toSubmit")}
                    </Button>
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
                </Stack>
            </Box>

        </form>
    );
};
