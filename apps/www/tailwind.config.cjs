/** @type {import("tailwindcss").Config} */
module.exports = {
    presets: [require("@acme/tailwind-config")],
    theme: {
        extend: {
            animation: {
                tilt: 'tilt 10s infinite linear',
            },
            keyframes: {
                tilt: {
                    '0%, 50%, 100%': {
                        transform: 'rotate(0deg)',
                    },
                    '25%': {
                        transform: 'rotate(1.2deg)',
                    },
                    '75%': {
                        transform: 'rotate(-1.2deg)',
                    },
                },
            },
        },
    }
};