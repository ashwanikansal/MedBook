/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        texture: "url('/texture.svg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: {
        DEFAULT: "#0d7e78",
        light: "#2ffcd5",
      },
      pink: {
        DEFAULT: "#ff6060",
        light: "#ffdeee",
      },
      blue: {
        DEFAULT: "#6f8eff",
        light: "#bde7ff",
        dark: "#0000ff",
      },
      light: "#ffffff",
      dark: "#000000",
      gray: "#383838",
    },
  },
  plugins: [],
};
