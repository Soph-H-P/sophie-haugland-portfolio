import React from 'react';
import ParticlesBg from 'particles-bg';

import Title from '../Title';
import Subtitle from '../Subtitle';
import StyledAnchor from '../StyledAnchor';

const HomeSection = () => {
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} />
      <Title>Sophie Haugland</Title>
      <Subtitle>Front-end developer</Subtitle>
      <StyledAnchor text="Portfolio" href={'#portfolio'} anchorType={'button'} />
    </>
  );
};

export default HomeSection;
