import { createMuiTheme } from "@mui/material/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Noto Sans JP", sans-serif',
  },
});

export default theme;
