module.exports = {
    env: {
        es2020: true,
        node: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:eslint-comments/recommended',
        'prettier'
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
}