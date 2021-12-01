import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
