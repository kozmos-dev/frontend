module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": ["solid"],
    "extends": ["eslint:recommended", "plugin:solid/typescript", "standard-with-typescript"],
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
        "project": ["./tsconfig.json"]
    },
    "rules": {
    }
}
