"use client"

import {ChakraProvider, createSystem, defaultConfig} from "@chakra-ui/react"
import {ColorModeProvider, type ColorModeProviderProps,} from "./color-mode"
import {config} from "@/theme.ts";
import React from "react";
import {Toaster} from "@/components/ui/toaster.tsx";


const system = createSystem(defaultConfig, config)


export function Provider(props: ColorModeProviderProps) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} />
            <Toaster/>
        </ChakraProvider>
    )
}
