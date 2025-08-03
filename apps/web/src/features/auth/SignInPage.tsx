import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {useTabName} from "@/hooks/tabName.ts";
import {SignInForm} from "@/features/auth/SignInForm.tsx";
import {Box, HStack} from "@chakra-ui/react";
import React from "react";

export const SignInPage = () => {
    const {t} = useTranslation(TranslationNamespaces.LOGIN, {keyPrefix: "loginPage"})
    useTabName(t("tabName"))
    return (
        <HStack>
            <Box bg="bg.default" flex={1} minH="100vh" display="flex"
                 flexDirection="column"
                 justifyContent="center"
                 alignItems="center"
            >
                <SignInForm/>
            </Box>
            <Box bg="bg.subtle" flex={1} minH="100vh">
            </Box>
        </HStack>
    )
}