import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Subtitle from '../atoms/Subtitle';

import handleContactFormSubmit from '../../utils/submitForm';

const StyledForm = styled.form`
  width: 500px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.lightFontColor};

  button {
    width: 216px;
    font-size: 22px;
    font-weight: 300;
    color: ${(props) => props.theme.lightFontColor};
    cursor: pointer;
    transition: all 0.3s ease;
    background: ${(props) => props.theme.darkFontColor};
    border: 2px solid ${(props) => props.theme.lightFontColor};
    align-self: center;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;

  input,
  textarea {
    padding: 5px;
    font-size: 20px;
  }

  label {
    font-size: 20px;
    padding: 5px 0px;
  }

  @media (max-width: 600px) {
    input,
    textarea {
      font-size: 16px;
    }

    label {
      font-size: 16px;
    }
  }
`;

const ContactSection = () => {
  const [messageIsSent, setMessageIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setMessageIsSent(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Subtitle>Contact</Subtitle>
      <StyledForm
        action="https://soph-web-dev.eu/bug-blog/wp-json/contact-form-7/v1/contact-forms/104/feedback"
        method="post"
        onSubmit={(e) => handleContactFormSubmit(e, setMessageIsSent, setIsError)}
      >
        {messageIsSent && <p>Your message has been sent</p>}
        <InputContainer>
          <label htmlFor="full-name">Name</label>
          <input type="text" id="full-name" name="full-name" required />
        </InputContainer>

        <InputContainer>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </InputContainer>

        <InputContainer>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </InputContainer>

        <InputContainer>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <p>
            Characters remaining: <span id="character-count">500</span>
          </p>
        </InputContainer>
        {isError && <p>There was an error sending the message, please try again later.</p>}
        <button
          type="submit"
          // disabled="true"
          aria-label="send"
        >
          Send
        </button>
      </StyledForm>
    </>
  );
};

export default ContactSection;
