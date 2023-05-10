import "./App.css";
import { createBrowserRouter,Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from "./component/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#353641",
    },
    secondary: {
      main: "#C0C0C0",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
}
export default App;
