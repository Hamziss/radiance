module.exports = {
    extends: ["next", "next/babel", "next/core-web-vitals", "turbo", "prettier"],
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "react/jsx-key": "off",
    },
};