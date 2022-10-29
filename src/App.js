import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/generalStyle";

import Profile from "./components/Profile";
import LinkSection from "./components/LinkSection";
import MoreLinkSection from "./components/MoreLinkSection";
import { theme } from "./styles/theme";

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main>
          <Content>
            <Profile />
            <LinkSection />
          </Content>
          <MoreLinkSection />
        </Main>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  /* height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* max-width: 120rem; */
  /* overflow: hidden; */
  /* background-color: #f4f5f7;
  margin: 0 auto; */

  position: relative;
  width: 1440px;
  height: 1158px;

  background: #ffffff;
`;

const Main = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 32px;
  gap: 32px;

  width: 1216px;
  height: 774px; */

  /* Inside auto layout */

  /* flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0; */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 112px;
  gap: 24px;

  position: absolute;
  width: 1440px;
  height: 998px;
  left: 0px;
  top: 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 56px;

  width: 1152px;
  height: 774px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
