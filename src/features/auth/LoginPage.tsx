import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {useTabName} from "@/hooks/tabName.ts";
import {LoginForm} from "@/features/auth/LoginForm.tsx";
import {Box} from "@chakra-ui/react";
import {ColorModeButton} from "@/components/ui/color-mode.tsx";
import React from "react";

export const LoginPage = () => {
    const {t} = useTranslation(TranslationNamespaces.LOGIN, {keyPrefix: "loginPage"})
    useTabName(t("tabName"))
    return (
        <Box bg="background.default" minH="100vh">
            <ColorModeButton/>
            <LoginForm/>
        </Box>
    )
}