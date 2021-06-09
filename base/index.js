module.exports = {
    extends: [
        "eslint:recommended"
    ],
    rules: {
        // Discourage use of Array constructor.
        "no-array-constructor": "warn",

        // Encourage use of constants where appropriate.
        "prefer-const": "warn",
    }
}
