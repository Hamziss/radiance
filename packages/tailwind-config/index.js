const colors = require("tailwindcss/colors");
const { fontFamily } = require('tailwindcss/defaultTheme');


module.exports = {
    content: ["./src/**/*.{ts,tsx}", "./src/_app.tsx"],
    theme: {
        extend: {
            colors: {
                brandblue: colors.blue[500],
                brandred: colors.red[500],
                brandyellow: colors.yellow[500],
            },
            fontFamily: {
                primary: ['var(--inter-font)', ...fontFamily.sans],
                serif: ['var(--inter-font)', ...fontFamily.serif],
            },
        },
    },
    plugins: [],
};