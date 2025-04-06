module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'import',
    '@typescript-eslint',
    'react',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Add other overrides based on team preference
  },
}
