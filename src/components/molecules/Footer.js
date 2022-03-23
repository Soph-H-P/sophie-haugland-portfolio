import React from 'react';
import styled from 'styled-components';

import linkedIn from '../../assets/linkedin.svg';
import gitHub from '../../assets/github.svg';

import StyledAnchor from '../atoms/StyledAnchor';

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
        <StyledAnchor text="Home" href={'#home'} anchorType={'footer'} />
        <StyledAnchor text="Portfolio" href={'#portfolio'} anchorType={'footer'} />
        <StyledAnchor text="About" href={'#about'} anchorType={'footer'} />
        <StyledAnchor text="Contact" href={'#contact'} anchorType={'footer'} />
      </div>
      <div>
        <StyledAnchor
          text={<img src={linkedIn} alt="linkedIn" />}
          href={'https://www.linkedin.com/in/smphaugland/'}
          anchorType={'footer'}
          target="_blank"
        />
        <StyledAnchor
          text={<img src={gitHub} alt="linkedIn" />}
          href={'https://github.com/Soph-H-P'}
          anchorType={'footer'}
          target="_blank"
        />
      </div>
    </StyledFooter>
  );
};

export default Footer;
