const colors = require("tailwindcss/colors");



module.exports = {
    content: ["./src/**/*.{ts,tsx}", "./src/_app.tsx"],
    theme: {
        extend: {
            colors: {
                brandblue: colors.blue[500],
                brandred: colors.red[500],
                brandyellow: colors.yellow[500],
            },
        },
    },
    plugins: [],
};