import {useTranslation} from "react-i18next";
import {TranslationNamespaces} from "@/i18n/namespaceResources.ts";
import {useTabName} from "@/hooks/tabName.ts";
import {Box, HStack} from "@chakra-ui/react";
import React from "react";
import {SignUpForm} from "@/features/auth/SignUp/SignUpForm.tsx";

export const SignUpPage = () => {
    const {t} = useTranslation(TranslationNamespaces.AUTH, {keyPrefix: "signUpPage"})
    useTabName(t("tabName"))
    return (
        <HStack>
            <Box bg="bg.default" flex={1} minH="100vh" display="flex"
                 flexDirection="column"
                 justifyContent="center"
                 alignItems="center"
            >
                <SignUpForm/>
            </Box>
            <Box bg="bg.subtle" flex={1} minH="100vh">
            </Box>
        </HStack>
    )
}