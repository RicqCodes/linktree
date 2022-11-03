import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem 0;

  @media (max-width: 34.6em) {
    padding-top: 1rem;
  }
`;

export const MainSection = styled.div`
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
      width: 38rem;
    }
  }
`;
