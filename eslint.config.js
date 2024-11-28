import path from "path";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
});

const config = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:jsx-a11y/recommended"),
  ...compat.extends("plugin:import/recommended"),
  ...compat.extends("plugin:prettier/recommended"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/jsx-props-no-spreading": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      "no-console": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-bind": [
        "error",
        { allowArrowFunctions: true, allowFunctions: false },
      ],
      "react/jsx-key": "error",
      "react/prop-types": "error",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "import/no-duplicates": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "no-warning-comments": [
        "warn",
        { terms: ["todo", "fixme"], location: "start" },
      ],
      "jsx-a11y/no-static-element-interactions": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "error",
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/out/**", // En caso de usar exportación estática
    ],
  },
];

export default config;
