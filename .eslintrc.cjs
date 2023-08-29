module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
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
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/object-curly-spacing": "off",
        "no-trailing-spaces": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/block-spacing": "off",
    }
}
