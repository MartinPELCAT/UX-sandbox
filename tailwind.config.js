module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        "7xl": "7rem",
      },
      backgroundImage: {
        "home-gradient": "linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%)",
        "fallback-gradient": "linear-gradient(326deg, #861657 0%, #ffa69e 74%)",
      },
      backgroundColor: {
        "home-color": "#f9d29d",
        "fallback-color": "#861657",
        "ahsa-red": "#e31b1e",
      },
      textColor: {
        "ahsa-red": "#e31b1e",
      },
      borderColor: {
        "loading-spinner":
          "white rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2)",
      },
    },
  },
  variants: {},
  plugins: [],
};
