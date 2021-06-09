module.exports = {
    extends: [
        "@sentryware/eslint-config-base",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        // Override plugin:@typescript-eslint/recommended extension;
        // The array literal notation is preferable, but the constuctor isn't a show-stopper.
        "@typescript-eslint/no-array-constructor": "warn",

        // Override plugin:@typescript-eslint/recommended extension;
        // This only concerns verbosity and thus doesn't warrant an error.
        "@typescript-eslint/no-inferrable-types": "warn",

        // Override plugin:@typescript-eslint/recommended extension;
        // TypeScript provides better types with const, but this doesn't warrant an error.
        "prefer-const": "warn",
    }
}
