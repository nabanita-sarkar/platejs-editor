const prettierConfig = require('./prettier.config.js');

module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc',
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss', 'unused-imports', 'prettier', 'react-refresh'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': ['warn', prettierConfig],
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'none',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
