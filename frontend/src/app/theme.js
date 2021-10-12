import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#7a7a7a",
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
