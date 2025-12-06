import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules/**",
      ".stryker-tmp/**",
      "coverage/**",
      "reports/**",
      "**/*.js",
      "app/**/*.js",
      "test/**/*.js"
    ]
  },
  { files: ["**/*.{ts,mts,cts}"] },
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];
