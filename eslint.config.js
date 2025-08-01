import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import path from "path";

export default tseslint.config(
    js.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        semi: ["off"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
        plugins: {
            react,
            import: importPlugin,
        },
        rules: {
            // React
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-vars": "error",

            // Quote style
            quotes: ["error", "double"],

            // Import extensions
            "import/extensions": [
                "error",
                "always",
                {
                    ts: "always",
                    tsx: "always",
                    js: "never",
                    jsx: "never",
                },
            ],

            // Autres suggestions utiles
            "no-unused-vars": "warn",
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
                alias: {
                    map: [["@", path.resolve(__dirname, "src")]],
                    extensions: [".ts", ".tsx", ".js", ".jsx"],
                },
            },
        },
    }
);