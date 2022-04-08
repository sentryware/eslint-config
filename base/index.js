module.exports = {
    extends: [
        "eslint:recommended"
    ],
    rules: {
        // Discourage spacing immediately inside array brackets.
        "array-bracket-spacing": "warn",

        // Arrows should have a space on either side.
        "arrow-spacing": "warn",

        // Encourage consistent brace style.
        "brace-style": ["warn", "stroustrup"],

        // Discourage dangling commas on last line of block.
        "comma-dangle": ["warn", "always-multiline"],

        // Encourage spacing after and not before commas.
        "comma-spacing": "warn",

        // All block statements should be wrapped in curly braces.
        "curly": "warn",

        // Files should end in newline.
        "eol-last": ["warn", "always"],

        // Encourage spacing after and not before the colon in object literal properties.
        "key-spacing": "warn",

        // Encourage spacing before and after keywords.
        "keyword-spacing": "warn",

        // Encourage spacing immediately inside curly braces.
        "object-curly-spacing": ["warn", "always"],

        // Discourage use of Array constructor.
        "no-array-constructor": "warn",

        // Empty blocks should be avoided but aren't otherwise problematic.
        "no-empty": "warn",

        // Discourage multiple consecutive spaces on a line.
        "no-multi-spaces": "warn",

        // Discourage extra empty lines.
        "no-multiple-empty-lines": ["warn", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],

        // Discourage spaces at the end of lines.
        "no-trailing-spaces": "warn",

        // Discourage padding at beginning and end of blocks.
        "padded-blocks": ["warn", "never"],

        // Encourage use of constants where appropriate.
        "prefer-const": "warn",

        // Encourage space before blocks.
        "space-before-blocks": "warn",

        // Encourage spacing around infix operators.
        "space-infix-ops": "warn",

        // Discourage spaces immediately inside parentheses.
        "space-in-parens": "warn",
    }
}
