export const light = {
  body: "#fff",
  text: "#202020", // black shade
  bodyRgba: "255, 255, 255",
  textRgba: "32,32,32",

  grey: "#bebebe",

  fontxs: "0.75em",
  fontsm: "0.875em",
  fontmd: "1em", // 1em = 16px
  fontlg: "1.25em",
  fontxl: "2em",
  fontxxl: "3em",
  fontxxxl: "5em",
  fontBig: "10em",

  navHeight: "5rem",
};

export const dark = {
  body: "#000505",
  text: "#fff", // black shade
  bodyRgba: "32,32,32",
  textRgba: "255, 255, 255",

  grey: "#bebebe",

  fontxs: "0.75em",
  fontsm: "0.875em",
  fontmd: "1em", // 1em = 16px
  fontlg: "1.25em",
  fontxl: "2em",
  fontxxl: "3em",
  fontxxxl: "5em",
  fontBig: "10em",

  navHeight: "5rem",
};

export const TextStyles = {
  light: {
    color: light["text"],
  },
  dark: {
    color: dark["text"],
  },
};

const CardBaseStyles = {
  w: "95%",
  size: "lg",
  mt: "7%",
  mb: "2%",
  align: "center",
  shadow: "dark-lg",
};
export const CardStyles = {
  light: {
    ...CardBaseStyles,
    bg: "#00A7E1",
    color: "#000505",
  },
  dark: {
    ...CardBaseStyles,
    bg: "#2A9D8F",
    color: "#F7F7FF",
  },
};
