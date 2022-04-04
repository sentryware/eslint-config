module.exports = {
    extends: [
        "eslint:recommended"
    ],
    rules: {
        // Discourage dangling commas on last line of block.
        "comma-dangle": ["warn", "always-multiline"],

        // Discourage use of Array constructor.
        "no-array-constructor": "warn",

        // Empty blocks should be avoided but aren't otherwise problematic.
        "no-empty": "warn",

        // Encourage use of constants where appropriate.
        "prefer-const": "warn",
    }
}
