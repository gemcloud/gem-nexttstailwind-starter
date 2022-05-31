// import modules
const { fontFamily } = require("tailwindcss/defaultTheme");

// custom js functions:
// Credit :
function withOpacityValue(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

// Credit : https://levelup.gitconnected.com/how-to-use-themes-with-tailwind-css-9d5f20231d37
// And Credit : https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo
// apply opacity to your custom colours too!!!
// because if we’d just used hex values, then the tailwind opacity values are ignored.
// OK: How to opacityValue? : bg-custom-100/80 ==> 80 is opacityValue
// OK: How to opacityVariable? : bg-custom-100 bg-opacity-25 ==> "bg-opacity-25" is opacityVariable
function withOpacityVariable(variable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${variable}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${variable}))`;
  };
}

// Configure tailwind for our project.
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacityVariable("--tw-clr-primary-50"),
          100: withOpacityVariable("--tw-clr-primary-100"),
          200: withOpacityVariable("--tw-clr-primary-200"),
          300: withOpacityVariable("--tw-clr-primary-300"),
          400: withOpacityVariable("--tw-clr-primary-400"),
          500: withOpacityVariable("--tw-clr-primary-500"),
          600: withOpacityVariable("--tw-clr-primary-600"),
          700: withOpacityVariable("--tw-clr-primary-700"),
          800: withOpacityVariable("--tw-clr-primary-800"),
          900: withOpacityVariable("--tw-clr-primary-900"),
        },
        dark: "#222222",
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
