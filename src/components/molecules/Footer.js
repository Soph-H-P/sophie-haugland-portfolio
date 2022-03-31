import React from 'react';
import styled from 'styled-components';

import linkedIn from '../../assets/linkedin.svg';
import gitHub from '../../assets/github.svg';

import StyledAnchor, { StyledATag } from '../atoms/StyledAnchor';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.darkFontColor};
  padding: 20px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 600px) {
    padding: 20px 20px 68px 20px;
  }

  @media (max-width: 650px) {
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <StyledAnchor to="home" spy={true} smooth={true} duration={500} anchortype={'footer'}>
          Home
        </StyledAnchor>
        <StyledAnchor to="portfolio" spy={true} smooth={true} duration={500} anchortype={'footer'}>
          Portfolio
        </StyledAnchor>
        <StyledAnchor to="about" spy={true} smooth={true} duration={500} anchortype={'footer'}>
          About
        </StyledAnchor>
        <StyledAnchor to="contact" spy={true} smooth={true} duration={500} anchortype={'footer'}>
          Contact
        </StyledAnchor>
      </div>
      <div>
        <StyledATag
          text={<img src={linkedIn} alt="linkedIn" />}
          href={'https://www.linkedin.com/in/smphaugland/'}
          anchorType={'footer'}
          target="_blank"
        />
        <StyledATag
          text={<img src={gitHub} alt="GitHub" />}
          href={'https://github.com/Soph-H-P'}
          anchorType={'footer'}
          target="_blank"
        />
      </div>
    </StyledFooter>
  );
};

export default Footer;
