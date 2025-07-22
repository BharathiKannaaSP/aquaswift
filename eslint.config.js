// eslint.config.js
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import prettierPlugin from 'eslint-plugin-prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config([
  {
    // ✅ Client configuration
    files: ['client/**/*.{ts,tsx,js,jsx}'],
    ...tseslint.configs.recommendedTypeChecked[0],
    languageOptions: {
      ...tseslint.configs.recommendedTypeChecked[0].languageOptions,
      parserOptions: {
        ...tseslint.configs.recommendedTypeChecked[0].languageOptions.parserOptions,
        project: [join(__dirname, 'client/tsconfig.json')],
        tsconfigRootDir: __dirname,
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
      'no-trailing-spaces': 'error',
      'no-console': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          printWidth: 100,
          trailingComma: 'all',
          bracketSpacing: true,
          tabWidth: 2,
          jsxBracketSameLine: true,
        },
      ],
    },
  },
  {
    // ✅ Server configuration
    files: ['server/**/*.{ts,tsx,js,jsx}'],
    ...tseslint.configs.recommendedTypeChecked[0],
    languageOptions: {
      ...tseslint.configs.recommendedTypeChecked[0].languageOptions,
      parserOptions: {
        ...tseslint.configs.recommendedTypeChecked[0].languageOptions.parserOptions,
        project: [join(__dirname, 'server/tsconfig.json')],
        tsconfigRootDir: __dirname,
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
    },
  },
]);
