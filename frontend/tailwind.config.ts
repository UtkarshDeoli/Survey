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

        "secondary-100":"#F3F3F3",
        "secondary-200":"#DDDDDD",
        "secondary-300":"#7C7C7C",
        "secondary-400":"#D9D9D9",
        "secondary-500":"#595959",
        "secondary-600":"#F5F7FA",

        "my-blue-700":"#2D4DA1",
        "my-blue-600":"#2C4C9E",
        "my-blue-400":"#3F6CE2",
        "my-blue-300":"#5D9CEC",
        "my-blue-350":"#355BBE",

        "custom-green-300":"#03B520"
      },
    },
  },
  plugins: [],
};
export default config;
