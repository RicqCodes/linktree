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
          <h2>Dechain_dev</h2>
        </Twitter>
        <ShareButton>
          <div>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
              <path
                d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="40"
                height="40"
                rx="20"
                stroke="#D0D5DD"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 3"
              />
            </svg>
          </div>
        </ShareButton>
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
  right: 308px;
  top: 20px;
  border-radius: 20px;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 2;

  &div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;

    position: absolute;
    left: 15%;
    right: 15%;
    top: 15%;
    bottom: 15%;

    border-radius: 12px;
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
