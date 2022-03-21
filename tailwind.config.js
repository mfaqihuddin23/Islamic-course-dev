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
        gray3: "#CCD2E3",
        gray4: "#DFDFDF",
        gray5: "#626263",
      },
      
      height: {
        '240': '240px',
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
