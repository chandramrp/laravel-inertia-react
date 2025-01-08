import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#1e293b", // slate-800
                    DEFAULT: "#0f172a", // slate-900
                    dark: "#020617", // slate-950
                },
                secondary: {
                    light: "#7dd3fc", // sky-300
                    DEFAULT: "#38bdf8", // sky-400
                    dark: "#0284c7", // sky-600
                },
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
