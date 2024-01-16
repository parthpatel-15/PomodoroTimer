module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        'react-refresh/only-export-components': 'warn',
    }
}





//############################################
// module.exports = {
//     env: { browser: true, es2020: true },
//     extends: [
//       'eslint:recommended',
//       'plugin:@typescript-eslint/recommended',
//       'plugin:react-hooks/recommended',
//     ],
//     parser: '@typescript-eslint/parser',
//     parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//     plugins: ['react-refresh'],
//     rules: {
//       'react-refresh/only-export-components': 'warn',
//     },
//   }


//############################################
// module.exports = {
//     parser: '@typescript-eslint/parser',
//     extends: [
//       'plugin:react/recommended',
//       'plugin:@typescript-eslint/recommended',
//       'prettier/@typescript-eslint',
//       'plugin:prettier/recommended',
//     ],
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//     plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import'],
//     rules: {
//       // Add any additional rules or overrides here
//     },
//   };
  