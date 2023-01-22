module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended",
        "next",
        "turbo",
        "prettier",
    ],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "react/jsx-key": "off",

    },
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
}