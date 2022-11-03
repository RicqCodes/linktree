import React, { Fragment } from "react";
import styled from "styled-components";

import Profile from "../Profile";
import LinkSection from "../LinkSection";
import MoreLinkSection from "../MoreLinkSection";
import Footer from "../Footer";

import { AppContainer, MainSection } from "../../styles/AppContainer.styled";

const Home = () => {
  return (
    <Fragment>
      <MainSection>
        <Profile />
        <LinkSection />
        <MoreLinkSection />
      </MainSection>
      <Footer />
    </Fragment>
  );
};

export default Home;
