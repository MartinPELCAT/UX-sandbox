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
        "sunset-gradient": "linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",
        calendar: "linear-gradient(215deg, #FCC9B9 0%, #EAABB2 100%)",
      },
      backgroundColor: {
        "home-color": "#f9d29d",
        "fallback-color": "#861657",
        "ahsa-red": "#e31b1e",
        "sunset-color": "#a40606",
      },
      textColor: {
        "ahsa-red": "#e31b1e",
      },
      borderColor: {
        "loading-spinner":
          "white rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2)",
      },
      borderRadius: {
        "login-extra": "50px",
        xl: "0.75rem",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      backgroundOpacity: {
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
      },
    },
  },
  variants: {},
  plugins: [],
};
