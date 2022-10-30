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
            <Profile />
            <LinkSection />
            <MoreLinkSection />
          </MainSection>
          <Footer />
        </ThemeProvider>
      </AppContainer>
    </Fragment>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem 0;

  @media (max-width: 34.6em) {
    padding-top: 1rem;
  }
`;

const MainSection = styled.div`
  /* @media (max-width: 1216px) { */
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 4rem;

  ${AppContainer} & {
    width: 100rem;
  }

  @media (max-width: 67em) {
    ${AppContainer} & {
      width: 85rem;
      margin-top: 3rem;
    }
  }

  @media (max-width: 55em) {
    ${AppContainer} & {
      width: 65rem;
    }
  }

  @media (max-width: 34.6em) {
    ${AppContainer} & {
      padding-top: 2rem;
      width: 41rem;
    }
  }
`;
