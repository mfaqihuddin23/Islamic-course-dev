const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["jakarta", "sans-serif",],
    },
    screens: {
      // => @media (min-width: ...px ) { ... }
      md: "640px",
      lg: "1024px",
      xl: "1220px",
    },
    container: {
      center: true,
      maxWidth: {
        md: "768px",
        lg: "1024px",
        xl: "1220px",
      },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "1.5rem",
          md: "1.5rem",
          lg: "1.5rem",
          xl: "0rem",
        },
      },
      colors: {
        maroon: "#4a1b22",
        ruby: "#CE3252",
        third: "#6F585B",
        gray: "#C4C4C4",
        gray2: "#3C64B140",


      },
      boxShadow: {
        'left': 'inset 30px 1px 65px -7px #151C25',
        'right': 'inset -30px 1px 65px -7px #151C25',
      },
      width: {
        '25': '6.375rem',
        '43rem': "43.75rem",
        '300': "390px"
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".w-120": {
          width: "28rem",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
