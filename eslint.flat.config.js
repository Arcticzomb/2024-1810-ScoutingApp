import globals from "globals";
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import svelte3 from "eslint-plugin-svelte3";
import tsParser from "@typescript-eslint/parser";
import typescript from "typescript";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        ignores: [".svelte-kit/*"]
    },
    js.configs.recommended,
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2020
            },
            globals: {
                ...globals.node,
                ...globals.es2017
            }
        },
        plugins: {
            "@typescript-eslint": ts,
            "svelte3": svelte3
        },
        settings: {
            "svelte3/typescript": () => typescript
        },
        rules: {
            ...ts.configs.recommended.rules,
            ...ts.configs["eslint-recommended"].rules,
            "indent": ["error", 4, { "SwitchCase": 4 }],
            "arrow-spacing": ["error", { before: true, after: true }],
            "arrow-parens": ["error", "always"],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "object-curly-spacing": ["error", "always", { "objectsInObjects": false }]
        }
    },
    {
        files: ["*.svelte"],
        processor: "svelte3/svelte3"
    }
];
