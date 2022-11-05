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
import Modal from "../Modal";
import Footer from "../Footer";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [touched, setTouched] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

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
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Please enter a message";
    } else if (values.message.length < 50) {
      errors.message = "Minimum of 50 characters";
    }
    setErrors(errors);
  };

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

  useEffect(() => {
    validation(formData);
  }, [formData, touched]);

  const onSubmit = (e, values) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    try {
      validation(values);

      if (Object.keys(errors).length > 0 && setIsFormSubmitted) {
        console.log("working");
        setTouched({
          first_name: true,
          last_name: true,
          email: true,
          message: true,
        });
      }

      if (Object.keys(errors).length === 0) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });

        setTouched({
          first_name: false,
          last_name: false,
          email: false,
          message: false,
        });

        setIsOpen(true);
        // setIsFormSubmitted(false);
      }

      if (errors) throw new Error();
    } catch (err) {
      setIsFormSubmitted(false);
    }

    console.log(isFormSubmitted);
  };

  const { first_name, last_name, email, message } = formData;

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
          <Form onSubmit={(e) => onSubmit(e, formData)}>
            <Names>
              <Name>
                <label htmlFor="first_name">First name</label>
                <input
                  id="first_name"
                  type="text"
                  placeholder="Enter your first name"
                  autoComplete="off"
                  value={first_name}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {errors.first_name && touched.first_name && (
                  <span className="error">{errors.first_name}</span>
                )}
              </Name>
              <Name>
                <label htmlFor="last_name">Last name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder="Enter your last name"
                  autoComplete="off"
                  value={last_name}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {errors.last_name && touched.last_name && (
                  <span className="error">{errors.last_name}</span>
                )}
              </Name>
            </Names>
            <Email>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="yourname@email.com"
                autoComplete="off"
                value={email}
                onChange={onChange}
                onBlur={onBlur}
                data-error={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <span className="error">{errors.email}</span>
              )}
            </Email>
            <Message>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Send me a message and i will reply you as soon as possible..."
                autoComplete="off"
                value={message}
                onChange={onChange}
                onBlur={onBlur}
                data-error={errors.message && touched.message ? true : false}
              />
              {errors.message && touched.message && (
                <span className="error">{errors.message}</span>
              )}
            </Message>
            <Select>
              <input
                // checked={isFormSubmitted ? true : ""}
                defaultChecked={isFormSubmitted}
                // onChange={(e) => e.}
                id="checkbox_1"
                type="checkbox"
                required
              />
              <label htmlFor="checkbox_1">
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
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </Fragment>
  );
};

export default Contact;
