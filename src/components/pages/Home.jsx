import React, { Fragment } from "react";

import Profile from "../Profile";
import LinkSection from "../LinkSection";
import MoreLinkSection from "../MoreLinkSection";
import Footer from "../Footer";

import { MainSection } from "../../styles/AppContainer.styled";

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
