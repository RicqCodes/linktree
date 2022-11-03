import React from "react";
import styled from "styled-components";

import { AppContainer, MainSection } from "../../styles/AppContainer.styled";

const Contact = () => {
  return (
    <MainSection>
      <Container>
        <Intro>
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </Intro>
        <Form>
          <Names>
            <Name>
              <label for="first_name">First name</label>
              <input
                id="first_name"
                type="text"
                placeholder="Enter your first name"
              />
            </Name>
            <Name>
              <label for="last_name">Last name</label>
              <input
                id="last_name"
                type="text"
                placeholder="Enter your last name"
              />
            </Name>
          </Names>
          <Email>
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="yourname@email.com" />
          </Email>
          <Message>
            <label for="message">Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and i will reply you as soon as possible..."
            />
          </Message>
          <Select>
            <input id="checkbox_1" type="checkbox" />
            <label for="checkbox_1">
              You agree to provide your data to ricqcodes who may contact you
            </label>
          </Select>
          <button id="btn__submit" type="submit">
            Send message
          </button>
        </Form>
      </Container>
    </MainSection>
  );
};

export default Contact;

const Container = styled.div`
  padding: 4rem 12rem;
`;

const Intro = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & h1 {
    max-width: 85%;
    font-size: 2.6rem;
    color: #101828;
  }

  & p {
    margin-top: 2rem;
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

const Form = styled.form`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  button {
    border: none;
    width: 100%;
    padding: 1.5rem 0;
    background: #1570ef;
    color: #fff;
    border: 1px solid #1570ef;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

    @media (hover: hover) and (any-pointer: fine) {
      &:hover {
        background: #175cd3;
        border: 1px solid #175cd3;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }

    @media (hover: hover) and (any-pointer: coarse) {
      &:hover {
        background: #175cd3;
        border: 1px solid #175cd3;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }

    &:focus {
      background: #1570ef;
      border: 1px solid #1570ef;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
    }

    &:disabled {
      background: #b2ddff;
      border: 1px solid #b2ddff;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }
  }
`;

const Names = styled.div`
  ${Form} & {
    display: flex;
    width: 100%;
    gap: 2rem;
    /* justify-content: space-between; */
    align-items: center;
  }
`;

const Name = styled.div`
  ${Form} ${Names} & {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  & label {
    font-size: 1.2rem;
    color: #344054;
    font-weight: 500;
  }

  & input[type="text"] {
    width: 100%;
    padding: 0.9rem;
    background-color: #fff;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    outline: none;
    color: #101828;
    font-size: 1.6rem;

    ::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
      color: #667085;
      line-height: 2.4rem;
    }
  }

  & input[type="text"]:focus {
    border: 1px solid #84caff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
`;

const Email = styled.div`
  ${Form} & {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & label {
      font-size: 1.2rem;
      color: #344054;
      font-weight: 500;
    }

    & input[type="email"] {
      width: 100%;
      padding: 0.9rem;
      background-color: #fff;
      border: 1px solid #d0d5dd;
      border-radius: 6px;
      color: #101828;
      font-size: 1.6rem;

      outline: none;

      ::placeholder {
        font-size: 1.4rem;
        font-weight: 400;
        color: #667085;
        line-height: 2.4rem;
      }
    }

    & input[type="email"]:focus {
      border: 1px solid #84caff;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    }
  }
`;

const Message = styled.div`
  ${Form} & {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & label {
      font-size: 1.2rem;
      color: #344054;
      font-weight: 500;
    }

    & textarea {
      display: flex;
      width: 100%;
      padding: 0.9rem;
      background-color: #fff;
      border: 1px solid #d0d5dd;
      border-radius: 6px;
      height: 12rem;
      max-height: 18rem;
      outline: none;
      font-family: "inter", sans-serif;
      color: #101828;
      font-size: 1.6rem;

      ::placeholder {
        font-family: "inter", sans-serif;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 1.4rem;
        font-weight: 400;
        color: #667085;
        line-height: 2.4rem;
      }

      :focus {
        border: 1px solid #84caff;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
      }
    }
  }
`;

const Select = styled.div`
  ${Form} & {
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
      margin-right: 1rem;
    }

    & label {
      font-size: 1.4rem;
      font-weight: 400;
      position: relative;
    }

    & label::before,
    & label::after {
      position: absolute;
    }

    & label::before {
      content: "";
      display: inline-block;

      height: 16px;
      width: 16px;
      background: #ffffff;
      border: 1px solid #d0d5dd;
      border-radius: 5px;
      left: -2.4rem;
    }

    & label::after {
      content: "";
      display: inline-block;
      height: 6px;
      width: 9px;
      border-left: 2px solid #1570ef;
      border-bottom: 2px solid #1570ef;
      left: -2.1rem;
      top: 0.3rem;

      transform: rotate(-45deg);
    }

    input[type="checkbox"] {
      opacity: 0;
      /* position: absolute;
      left: -9999px; */
    }

    & input[type="checkbox"]:checked + label::before {
      background: #f9fafb;
      border: 1px solid #1570ef;
    }

    /* Hide the checkmark on the checked state */
    & input[type="checkbox"] + label::after {
      content: none;
    }

    /*Unhide the checkmark on the checked state*/
    & input[type="checkbox"]:checked + label::after {
      content: "";
    }

    & input[type="checkbox"]:focus + label::before {
      border: 1px solid #84caff;
      box-shadow: 0px 0px 0px 4px #d1e9ff;
    }

    & input[type="checkbox"]:disabled + label::before {
      background: #f2f4f7;
      border: 1px solid #d0d5dd;
    }
  }
`;
