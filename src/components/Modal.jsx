import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import message from "../img/messages.svg";
import { AppContainer } from "../styles/AppContainer.styled";

const Modal = ({ setIsOpen }) => {
  return (
    <ModalOuterContainer>
      <Centered>
        <ModalContainer>
          <ContentContainer>
            <ModalHeader>
              <img src={message} alt="message icon" />
              <Heading>Thank you</Heading>
            </ModalHeader>
            <ModalBody>
              <p>
                Your message has been received.
                <br />
                We will ge in touch and contact you soon!
              </p>
            </ModalBody>
            <Button>
              <Link to="/">Back to home</Link>
            </Button>
          </ContentContainer>
        </ModalContainer>
      </Centered>
    </ModalOuterContainer>
  );
};

export default Modal;

const ModalOuterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
`;
const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentContainer = styled.div`
  padding: 1rem 8rem;

  @media (max-width: 34.6em) {
    padding: 1rem 3rem;
  }
`;

const ModalContainer = styled.div`
  width: 55rem;
  min-width: 90%;
  /* height: 17rem; */
  background: white;
  color: white;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  @media (max-width: 34.6em) {
    ${AppContainer} & {
      width: 38rem;
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  img {
    margin-top: 2rem;
    height: 7.2rem;
    width: 7.2rem;
  }
`;

const Heading = styled.div`
  margin-top: 2rem;
  color: #2c3e50;
  font-weight: 500;
  font-size: 2.2rem;
  text-align: center;
`;

const ModalBody = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 1.3rem 2rem;
  background-color: #1570ef;
  border-radius: 8px;
  margin-bottom: 3rem;
  cursor: pointer;

  a {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
