import Typography from "typography";
import "typeface-montserrat";

const typography = new Typography({
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400", "700", "900"]
    }
  ],
  // baseFontSize: "16px",
  headerFontFamily: ["Montserrat", "serif"],
  bodyFontFamily: ["Montserrat", "serif"]
});

export default typography;
