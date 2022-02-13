import { createTheme, ThemeProvider } from "@mui/material/styles";
import Example from "./Example";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Example />
    </ThemeProvider>
  );
}

export default App;
