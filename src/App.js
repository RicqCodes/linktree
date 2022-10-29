import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/generalStyle";

import Profile from "./components/Profile";
import LinkSection from "./components/LinkSection";
import { theme } from "./styles/theme";

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Profile />
        <LinkSection />
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 120rem; */
  overflow: hidden;
  background-color: #f4f5f7;
  margin: 0 auto;
`;
