import {defineConfig, SystemConfig} from "@chakra-ui/react"

export const config: SystemConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: {value: "#3b82f6"},
                secondary: {value: "#eab308"},
            },
            fonts: {
                body: {value: "system-ui, sans-serif"},
            },

        },
    },


})
