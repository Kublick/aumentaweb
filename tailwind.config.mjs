/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      colors: {
        azul: "#202E83",
        verde: "#39B54A",
        naranja: "#FF8840",
        azulneon: "#00E7FF",
        rojo: "#FF0000",
        amarillo: "#FFE600",
        rosa: "#F43589",
        morado: "#7835FF",
      },
      fontFamily: {
        soap: "Soap",
        montserrat: "Montserrat",
        nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
