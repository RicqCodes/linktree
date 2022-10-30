import React, { useRef } from "react";
import styled from "styled-components";

import slack from "../img/slack-logo.png";

const Profile = () => {
  const focusRef = useRef(null);

  const onClick = () => {
    focusRef.current.focus();
    console.log(focusRef);
  };

  return (
    <ProfileContainer>
      <DesktopShare device-type="desktop">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z"
            stroke="#98A2B3"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z"
            stroke="#667085"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </DesktopShare>
      <Paragraph>Share Link</Paragraph>
      <MobileShare device-type="mobile">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          // class="icon"
          color="#98A2B3"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "rgb(152, 162, 179)" }}
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
        </svg>
      </MobileShare>

      <InfoContainer>
        <Img id="profile__img" ref={focusRef} onClick={onClick}>
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7.37722C1 7.0269 1 6.85174 1.01462 6.70421C1.1556 5.28127 2.28127 4.1556 3.70421 4.01462C3.85174 4 4.03636 4 4.40558 4C4.54785 4 4.61899 4 4.67939 3.99634C5.45061 3.94963 6.12595 3.46288 6.41414 2.746C6.43671 2.68986 6.45781 2.62657 6.5 2.5C6.54219 2.37343 6.56329 2.31014 6.58586 2.254C6.87405 1.53712 7.54939 1.05037 8.32061 1.00366C8.38101 1 8.44772 1 8.58114 1H13.4189C13.5523 1 13.619 1 13.6794 1.00366C14.4506 1.05037 15.126 1.53712 15.4141 2.254C15.4367 2.31014 15.4578 2.37343 15.5 2.5C15.5422 2.62657 15.5633 2.68986 15.5859 2.746C15.874 3.46288 16.5494 3.94963 17.3206 3.99634C17.381 4 17.4521 4 17.5944 4C17.9636 4 18.1483 4 18.2958 4.01462C19.7187 4.1556 20.8444 5.28127 20.9854 6.70421C21 6.85174 21 7.0269 21 7.37722V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H5.8C4.11984 20 3.27976 20 2.63803 19.673C2.07354 19.3854 1.6146 18.9265 1.32698 18.362C1 17.7202 1 16.8802 1 15.2V7.37722Z"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 15.5C13.2091 15.5 15 13.7091 15 11.5C15 9.29086 13.2091 7.5 11 7.5C8.79086 7.5 7 9.29086 7 11.5C7 13.7091 8.79086 15.5 11 15.5Z"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Img>
        <SocialContainer>
          <Twitter id="twitter">
            <h2>Dechain_dev</h2>
          </Twitter>

          <Slack id="slack">
            <img src={slack} alt="slack logo" />
            <p>@ricqcodes</p>
          </Slack>
        </SocialContainer>
      </InfoContainer>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  padding-bottom: 1.2rem;
  position: relative;
`;

const Paragraph = styled.p`
  align-items: center;
  border-radius: 8px;
  color: #fff;
  display: flex;
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
  padding: 10px 12px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  position: absolute;
  right: 25rem;
  top: -2.1rem;
  display: none;

  &,
  ::before {
    background-color: #101828;
    position: absolute;
  }

  ::before {
    border-radius: 1px;
    box-shadow: 0 12px 16px -4px rgb(16 24 40 / 8%),
      0 4px 6px -2px rgb(16 24 40 / 3%);
    content: "";
    height: 20px;
    right: -3px;
    -webkit-transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0);
    transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0);
    width: 20px;
    z-index: -1;
  }

  @media (max-width: 47.5em) {
    p {
      position: absolute;
      right: 6rem;
      top: -3rem;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
`;

const Img = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 8.8rem;
  width: 8.8rem;
  cursor: pointer;

  background: url("https://i.imgur.com/0CTbzC8.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 27.5rem;

  svg {
    opacity: 0;
    width: 2.4rem;
    height: 2.4rem;
    color: black;

    position: absolute;
    left: 36.33%;
    bottom: 12.5%;
  }

  &:focus {
    border: 5.5px solid #ebe9fe;
    border-radius: 27.5rem;
  }

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(52, 64, 84, 0.75),
        rgba(52, 64, 84, 0.75)
      ),
      url("https://i.imgur.com/0CTbzC8.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 27.5rem;

    svg {
      opacity: 1;
    }
  }

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(52, 64, 84, 0.75),
        rgba(52, 64, 84, 0.75)
      ),
      url("https://i.imgur.com/0CTbzC8.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 27.5rem;

    svg {
      opacity: 1;
    }
  }
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

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;
    color: #101828;
  }

  @media (min-width: 343px) {
    width: 34.3rem;
  }
`;

const DesktopShare = styled.div`
  align-items: center;
  border: 1px dashed #d0d5dd;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 35px;
  width: 35px;
  justify-content: center;
  position: absolute;
  top: -2rem;
  right: 20rem;

  svg:last-child {
    display: none;
  }

  &:hover {
    svg:first-child {
      display: none;
    }
    svg:last-child {
      display: flex;
    }

    & + ${Paragraph} {
      display: flex;
    }
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
    border-radius: 20px;
  }

  @media (max-width: 55em) {
    display: none;
  }
`;

const MobileShare = styled.div`
  display: none;

  @media (max-width: 55em) {
    align-items: center;
    border: 1px dashed #d0d5dd;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 35px;
    width: 35px;
    justify-content: center;
    margin-left: auto;
    margin-right: 10rem;
    position: absolute;
    top: -3rem;
    right: -10rem;
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
