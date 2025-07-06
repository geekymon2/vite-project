import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**"],
  },
  // Base JS config
  js.configs.recommended,

  // TypeScript support
  ...tseslint.configs.recommended,

  // React plugin and rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".tsx"] },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
