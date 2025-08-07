import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import perfectionist from 'eslint-plugin-perfectionist'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    ignorePatterns: ["**/__generated__/**"],
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': "error",
      'perfectionist/sort-classes': "error",
      'perfectionist/sort-exports': "error",
      'perfectionist/sort-jsx-props': "error",
      'perfectionist/sort-interfaces': "error",
      'perfectionist/sort-named-exports': "error",
      'perfectionist/sort-named-imports': "error",
      'perfectionist/sort-objects': "error",
    },
  }),
];

export default eslintConfig;
