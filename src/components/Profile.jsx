import React from "react";
import styled from "styled-components";

import img from "../img/pp.JPG";
import twitter from "../img/twitter-logo.png";
import slack from "../img/slack-logo.png";

const Profile = () => {
  return (
    <ProfileContainer>
      <Img id="profile__img"></Img>
      <h2>Prince Nwakanma</h2>
      <SocialContainer>
        <Twitter id="twitter">
          <img src={twitter} alt="twitter logo" />
          <p>@Dechain_dev</p>
        </Twitter>
        <Slack id="slack">
          <img src={slack} alt="slack logo" />
          <p>@ricqcodes</p>
        </Slack>
      </SocialContainer>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.section`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 2rem;
  }
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 8.8rem;
  width: 8.8rem;

  background: url("https://i.imgur.com/0CTbzC8.jpg");
  border-radius: 275px;

  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;

  /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
  } */
`;

const SocialContainer = styled.div`
  /* width: 3rem; */
  display: flex;
  gap: 0.5rem;

  margin-top: 2rem;
`;

const Twitter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const Slack = styled(Twitter)`
  display: none;
  position: relative;
  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    position: absolute;
    left: 3.3rem;
  }
`;
