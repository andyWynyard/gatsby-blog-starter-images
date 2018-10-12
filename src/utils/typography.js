import Typography from "typography";
import "typeface-montserrat";

const typography = new Typography({
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400"]
    }
  ],
  baseFontSize: "14px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Montserrat", "serif"],
  bodyFontFamily: ["Montserrat", "serif"]
});

export default typography;
