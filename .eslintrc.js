module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 1,
    'prettier/prettier': 1,
  },
}

// {
//   "root": true,
//   "parser": "@typescript-eslint/parser",
//   "plugins": [
//     "@typescript-eslint",
//     "prettier"
//   ],
//   "extends": [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/eslint-recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier"
//   ],
//   "rules": {
//     "no-console": 1,       // Means warning
//     "prettier/prettier": 2 // Means error
//   }
// }
