/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: ["../input/**/*.{cshtml,md,html}"],
    theme: {
        colors: {
            blue: "#02ACFA",
            pink: "#E000E0",
            white: "#FFFFFF",
            purple: "#370943",
        },
        extend: {
            gradientColorStops: theme => ({
                'blue-pink': [theme('colors.blue'), theme('colors.pink')],
                'golden-ember': ['#e2bf48', '#c98135'],
            }),
            backgroundImage: theme => ({
                'blue-pink': `linear-gradient(to right, ${theme('colors.blue')}, ${theme('colors.pink')})`,
                'pink-blue': `linear-gradient(to left, ${theme('colors.blue')}, ${theme('colors.pink')})`,
                'golden-ember': `linear-gradient(to right, #e2bf48, #c98135)`,
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
