import { Main } from "./layout/Main";
import { ThemeProvider } from "styled-components";
import { theme } from "./partials/theme";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
