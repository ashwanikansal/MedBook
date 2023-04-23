// /** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./public/",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'green': {
                DEFAULT: "#0d7e78",
                light: "#2ffcd5",
            },
            'pink': {
                DEFAULT: "#ff6060",
                light: "#ffdeee",
            },
            'blue': {
                DEFAULT: "#6f8eff",
                light: "#bde7ff",
                dark: "#0000ff",
            },
            'light': "#ffffff",
            'dark': "#000000",
            'grey': "#383838",
        },
    },
    plugins: [require("daisyui")],
    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "winter",
    },
}
