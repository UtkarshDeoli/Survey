import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        switch: "transform, background-color",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      transitionDuration: {
        "300": "300ms",
      },
      fontFamily:{
        'nunito-sans':["Nunito Sans", "sans-serif"]
      },
      boxShadow:{
        floating: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        // "primary-300": "#477BFF",
        "primary-300": "#FF8437",
        "primary-100":"#f7a572",
        "primary-50":"#FFF5E5",

        "secondary-100": "#F3F3F3",
        "secondary-200": "#DDDDDD",
        "secondary-300": "#7C7C7C",
        "secondary-400": "#D9D9D9",
        "secondary-500": "#595959",
        "secondary-600": "#F5F7FA",

        "my-blue-700": "#2D4DA1",
        // "secondary-100":"#7C7C7C",

        "my-gray-100": "#f5f7fa",
        "my-gray-105": "#F3F3F3",
        "my-gray-200": "#7C7C7C",

        "my-blue-600": "#2C4C9E",
        "my-blue-400": "#3F6CE2",
        "my-blue-300": "#5D9CEC",
        "my-blue-350": "#355BBE",

        "custom-green-300": "#03B520",
        "green-online": "#46fb16",
        "red-offline": "#f61818",
        "light-gray":"#F2F8FC",
        "dark-gray":"#525151",
        "lighter-gray":"#FAFAFA"
      },
    },
  },
  plugins: [],
};
export default config;
