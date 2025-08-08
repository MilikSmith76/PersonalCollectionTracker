import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    ignorePatterns: ['**/__generated__/**'],
    plugins: ['perfectionist'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      'jsx-quotes': ['error', 'prefer-single'],
      'perfectionist/sort-classes': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-interfaces': 'error',
      'perfectionist/sort-jsx-props': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-objects': 'error',
      'quotes': ['error', 'single'],
    },
  }),
];

export default eslintConfig;
