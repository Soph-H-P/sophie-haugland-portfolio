import React from 'react';
import styled, { css } from 'styled-components';

import StyledAnchor from './StyledAnchor';

const StyledNav = styled.nav`
  position: absolute;
  bottom: -68px;
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
    `}
`;

const NavBar = ({ fixed }) => {
  return (
    <StyledNav fixed={fixed}>
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
