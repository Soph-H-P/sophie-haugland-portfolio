import React from 'react';
import ParticlesBg from 'particles-bg';

import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import StyledAnchor from '../atoms/StyledAnchor';

const HomeSection = () => {
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} />
      <Title>Sophie Haugland</Title>
      <Subtitle>Front-end developer</Subtitle>
      <StyledAnchor
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
          anchortype={'button'}
        >
          Portfolio
        </StyledAnchor>
    </>
  );
};

export default HomeSection;
