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
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
