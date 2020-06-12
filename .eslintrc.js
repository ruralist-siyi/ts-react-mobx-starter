module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    // 'no-var': 2,
    // '@typescript-eslint/explicit-function-return-type': [
    //   'off',
    //   {
    //     allowExpressions: true,
    //     allowTypedFunctionExpressions: true
    //   }
    // ],
    // '@typescript-eslint/no-unused-vars': 2,
    // 'react/jsx-uses-react': 2,
    // 'react/jsx-uses-vars': 2,
    // 'react/react-in-jsx-scope': 2,
    // 'no-dupe-args': 2,
    // 'no-dupe-keys': 2,
    // 'no-duplicate-case': 2,
    // 'no-empty': 2,
    // 'no-ex-assign': 2,
    // 'no-extra-boolean-cast': 2,
    // 'no-extra-parens': 0,
    // curly: [2, 'all'],
    // 'no-catch-shadow': 0,
    // 'no-label-var': 2,
    // 'no-restricted-globals': 2,
    // 'no-shadow': 2,
    // 'no-shadow-restricted-names': 2,
    // 'no-undef-init': 2,
    // 'no-undefined': 2
  }
};
