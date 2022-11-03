import React, { Fragment } from "react";
import styled from "styled-components";

import { MainSection } from "../../styles/AppContainer.styled";
import {
  Container,
  Intro,
  Form,
  Names,
  Name,
  Email,
  Message,
  Select,
} from "../../styles/ Contact.styled";
import Footer from "../Footer";

const Contact = () => {
  return (
    <Fragment>
      <MainSection>
        <Container>
          <Intro>
            <h1>Contact Me</h1>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
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
      <Footer />
    </Fragment>
  );
};

export default Contact;
