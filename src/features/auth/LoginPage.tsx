import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {useTabName} from "@/hooks/tabName.ts";
import {LoginForm} from "@/features/auth/LoginForm.tsx";
import {Box, HStack} from "@chakra-ui/react";
import React from "react";

export const LoginPage = () => {
    const {t} = useTranslation(TranslationNamespaces.LOGIN, {keyPrefix: "loginPage"})
    useTabName(t("tabName"))
    return (
        <HStack>
            <Box bg="bg.default" flex={1} minH="100vh" display="flex"
                 flexDirection="column"
                 justifyContent="center"
                 alignItems="center"
            >
                <LoginForm/>
            </Box>
            <Box bg="bg.subtle" flex={1} minH="100vh">
            </Box>
        </HStack>
    )
}