import React, { Fragment, useEffect, useState } from "react";

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
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const validation = (values) => {
      const errors = {};
      if (!values.first_name) {
        errors.first_name = "First name is Required";
      }
      if (!values.last_name) {
        errors.last_name = "Last name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.message) {
        errors.message = "Please enter a message";
      }
      setErrors(errors);
    };

    validation(formData);
  }, [formData, touched]);

  const { first_name, last_name, email, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onBlur = (e) => {
    setTouched((prevState) => ({
      ...prevState,
      [e.target.id]: true,
    }));
  };

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
          <Form onSubmit={(e) => e.preventDefault()}>
            <Names>
              <Name>
                <label for="first_name">First name</label>
                <input
                  id="first_name"
                  type="text"
                  placeholder="Enter your first name"
                  autocomplete="off"
                  value={first_name}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {errors && touched.first_name && (
                  <span className="error">{errors.first_name}</span>
                )}
              </Name>
              <Name>
                <label for="last_name">Last name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder="Enter your last name"
                  autocomplete="off"
                  value={last_name}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {errors && touched.last_name && (
                  <span className="error">{errors.last_name}</span>
                )}
              </Name>
            </Names>
            <Email>
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="yourname@email.com"
                autocomplete="off"
                value={email}
                onChange={onChange}
                onBlur={onBlur}
              />
              {errors && touched.email && (
                <span className="error">{errors.email}</span>
              )}
            </Email>
            <Message>
              <label for="message">Message</label>
              <textarea
                id="message"
                placeholder="Send me a message and i will reply you as soon as possible..."
                autocomplete="off"
                value={message}
                onChange={onChange}
                onBlur={onBlur}
              />
              {errors && touched.message && (
                <span className="error">{errors.message}</span>
              )}
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
