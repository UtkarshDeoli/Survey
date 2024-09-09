import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-300":"#477BFF",

        "secondary-100":"#7C7C7C",

        "my-gray-100":"#f5f7fa",
        "my-gray-105":"#F3F3F3",
        "my-gray-200":"#7C7C7C",

        "my-blue-600":"#2C4C9E",
        "my-blue-400":"#3F6CE2",
        "my-blue-300":"#5D9CEC",
        "my-blue-350":"#355BBE",
      },
    },
  },
  plugins: [],
};
export default config;
