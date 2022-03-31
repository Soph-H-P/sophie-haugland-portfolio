import React from 'react';
import styled, { css } from 'styled-components';

import StyledAnchor from '../atoms/StyledAnchor';

const StyledNav = styled.nav`
  position: absolute;
  z-index: 1000;
  bottom: -78px;
  left: 0px;
  background-color: ${(props) => props.theme.darkFontColor};
  color: ${(props) => props.theme.lightFontColor};
  width: 100%;
  padding: 20px 0px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
  }

  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 0px;
      bottom: unset;

      @media (max-width: 600px) {
        bottom: 0px;
        top: unset;
      }
    `}

  @media (max-width: 550px) {
    padding: 20px 10px;
  }
`;

const NavBar = ({ fixed, isDesktop }) => {
  return (
    <StyledNav fixed={fixed} desktop={isDesktop}>
      <div>
        <StyledAnchor text="Home" href={'#home'} anchorType={'nav'} />
        <StyledAnchor text="Portfolio" href={'#portfolio'} anchorType={'nav'} />
        <StyledAnchor text="About" href={'#about'} anchorType={'nav'} />
        <StyledAnchor text="Contact" href={'#contact'} anchorType={'nav'} />
      </div>
    </StyledNav>
  );
};

export default NavBar;
