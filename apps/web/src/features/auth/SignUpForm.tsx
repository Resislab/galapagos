import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Box, Button, Input, Stack, Text} from "@chakra-ui/react";

import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {Field as ChakraField} from "@/components/ui/field.tsx";
import {RiArrowRightLine} from "react-icons/ri";
import {supabaseClient} from "@/api/client.ts";
import {PasswordInput, PasswordStrengthMeter} from "@/components/ui/password-input.tsx";
import {calculatePasswordStrength, PasswordStrength} from "@/features/auth/password-strength.ts";
import {toaster} from "@/components/ui/toaster.tsx";
import {RouteUrls} from "@/router/route-urls.ts";
import {useNavigate} from "react-router-dom";

export type LoginFormInputs = {
    email: string;
    password: string;
}

const initialPassword: string = ""

export const SignUpForm = () => {
    const [signUpError, setSignUpError] = useState<string | null>(null);
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(calculatePasswordStrength(initialPassword))
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid, isDirty},
    } = useForm<LoginFormInputs>({
            mode: "onChange",
            criteriaMode: "all",
            defaultValues: {
                email: "",
                password: initialPassword
            }

        }
    )
    const {t} = useTranslation(TranslationNamespaces.AUTH, {keyPrefix: "signUpPage"});
    const submitHandler = async (data: LoginFormInputs) => {
        setSignUpError(null);
        const {error} = await supabaseClient.auth.signUp({
            email: data.email,
            password: data.password,
        });

        if (error) {
            setSignUpError(error.message);
            console.log("ERREUR", error.message)
            toaster.create({
                description: t("errors.signUpErrorTitle"),
                type: "error",
                closable: true,
            });
        } else {
            toaster.create({
                description: t("success", {email: data.email}),
                type: "success",
                closable: true,
            });
            navigate(RouteUrls.HOME())
        }
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
                                autoComplete={"off"}
                                {...register(
                                    "email",
                                    {
                                        required: t("errors.required"),
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: t("errors.invalidEmail")
                                        }

                                    }
                                )
                                } />
                        </ChakraField>

                        <ChakraField label={t("password")} errorText={t("errors.required")}
                                     invalid={!!errors.password} required>
                            <PasswordInput
                                defaultValue="visible"
                                autoComplete="off"
                                {...register("password",
                                    {
                                        required: t("errors.required"),
                                        onChange: (e) => setPasswordStrength(calculatePasswordStrength(e.target.value))
                                    })
                                } />
                        </ChakraField>
                        <PasswordStrengthMeter value={passwordStrength.score}/>

                    </Stack>
                    {
                        signUpError && (
                            <Alert.Root status="error">
                                <Alert.Indicator/>
                                <Alert.Content>
                                    <Alert.Title>{t("errors.signUpErrorTitle")}</Alert.Title>
                                    <Alert.Description>
                                        {signUpError}
                                    </Alert.Description>
                                </Alert.Content>
                            </Alert.Root>
                        )
                    }
                    <Button disabled={isSubmitting || !isValid || !isDirty} type="submit" bg="primary">
                        {isSubmitting ? t("submitButton.submitting") : t("submitButton.toSubmit")} <RiArrowRightLine/>
                    </Button>
                </Stack>
            </form>
        </Box>

    );
};
