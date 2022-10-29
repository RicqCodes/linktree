import { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/generalStyle";

import Profile from "./components/Profile";
import LinkSection from "./components/LinkSection";
import MoreLinkSection from "./components/MoreLinkSection";
import { theme } from "./styles/theme";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainSection>
            <Content>
              <Profile />
              <LinkSection />
            </Content>
          </MainSection>
          <SocialSection>
            <MoreLinkSection />
          </SocialSection>
        </ThemeProvider>
      </AppContainer>
      <Footer />
    </Fragment>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 112px;
  gap: 24px;

  position: absolute;
  left: 0px;
  top: 0px;
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 32px;
  gap: 32px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 56px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const SocialSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
  gap: 64px;
  background: #fff;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
