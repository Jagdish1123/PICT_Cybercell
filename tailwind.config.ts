import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dark-bg': 'rgb(15, 15, 21)',
        'card-bg': 'rgb(31, 32, 45)',
        'card-text-color': 'rgb(128, 208, 254)',
        'custom-bg': '#000814',
        'blue-200':'#118AB2',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE 10+ */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Chrome, Safari, and Edge */
        },
      });
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
