module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/standard'],
  plugins: ['vue', 'prettier'],
  rules: {
    'import/no-unresolved': 0,
    'import/no-unassigned-import': 0,
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-console': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ]
  }
}
