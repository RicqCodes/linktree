import React from "react";
import styled from "styled-components";

import img from "../img/pp.JPG";
import twitter from "../img/twitter-logo.png";
import slack from "../img/slack-logo.png";

const Profile = () => {
  return (
    <ProfileContainer>
      <Img id="profile__img"></Img>
      <SocialContainer>
        <Twitter id="twitter">
          <h2>@Dechain_dev</h2>
        </Twitter>
        <ShareButton></ShareButton>
        <Slack id="slack">
          <img src={slack} alt="slack logo" />
          <p>@ricqcodes</p>
        </Slack>
      </SocialContainer>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  isolation: isolate;

  /* width: 1152px;
  height: 142px; */

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
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
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 275px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Twitter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 1152px;
  height: 30px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  z-index: 1;

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    text-align: center;

    /* Gray/900 */

    color: #101828;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }
`;

const ShareButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 208px;
  top: -20px;

  border: 1px dashed #d0d5dd;
  border-radius: 20px;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 2;
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
