/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                "primary": "#2b303a",
                "secondary": "#0D1117",
                "active": "#9f1239",
                "inactive": "#2b303a",
                "w": "#f3f4f6",

                "link": "#3b82f6",
                "blue-alliance": "#1e3a8a",
                "red-alliance": "#9f1239",
                "nav": "#21242c"
            }
        }
    },
    plugins: []
};
