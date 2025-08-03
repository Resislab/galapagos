import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Box, Button, HStack, Input, Link as ChakraLink, Separator, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom"

import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {Field as ChakraField} from "@/components/ui/field.tsx";
import {RiArrowRightLine} from "react-icons/ri";
import {supabaseClient} from "@/api/client.ts";
import {RouteUrls} from "@/router/route-urls.ts";

export type LoginFormInputs = {
    email: string;
    password: string;
}

export const SignInForm = () => {
    const [loginError, setLoginError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid, isDirty},
    } = useForm<LoginFormInputs>({
            mode: "onChange",
            criteriaMode: "all",
            defaultValues: {
                email: "",
                password: ""
            }

        }
    )
    const {t} = useTranslation(TranslationNamespaces.LOGIN, {keyPrefix: "loginPage"});
    const submitHandler = (data: LoginFormInputs) => {
        setLoginError(null);
        supabaseClient.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        })
    }
    return (
        <Box width="sm">
            <form onSubmit={handleSubmit(submitHandler)} autoComplete={"off"} noValidate>
                <Stack gap="6">
                    <Text fontSize="xl">{t("formTitle")}</Text>
                    <Stack gap="3">
                        <ChakraField label={t("email")} errorText={t("errors.required")}
                                     required>
                            <Input
                                autoComplete={"off"} {...register("email", {required: t("errors.required")})} />
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
                    <HStack>
                        <Separator flex="1"/>
                        <Text flexShrink="0">{t("alternative")}</Text>
                        <Separator flex="1"/>
                    </HStack>
                    <Box justifyContent="center" display="flex">
                        <ChakraLink asChild>
                            <Link to={RouteUrls.SIGN_UP()}>{t("createAccount")}</Link>
                        </ChakraLink>
                    </Box>
                </Stack>
            </form>
        </Box>

    );
};
