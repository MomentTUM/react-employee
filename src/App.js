import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./component/Header";

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
      <Header />
    </ThemeProvider>
  );
}

export default App;
