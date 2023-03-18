import 'react'
import GlobalStyles from './styles/global'
import Home from "./pages/Home"
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App
