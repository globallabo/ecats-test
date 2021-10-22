import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1a1a1a",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Noto Sans JP", sans-serif',

    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "1rem",
      textAlign: "center",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "1rem 0",
      textAlign: "left",
    },
    h3: {
      fontSize: "1.2rem",
      // fontWeight: "bold",
      margin: "0",
      padding: "0",
      textAlign: "left",
    },
    body1: {
      margin: "1.5rem auto",
      // width: "36ch",
      lineHeight: "1.75",
      minWidth: "30ch",
      maxWidth: "40ch",
      textAlign: "justify",
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          margin: "1rem 0.5rem",
        },
      },
    },
  },
});

export default theme;
