import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/generalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./styles/theme";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";

import { AppContainer } from "./styles/AppContainer.styled";

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
