import React from 'react';
import styled from 'styled-components';
import ParticlesBg from 'particles-bg';

const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: ${(props) => (props.loaded ? 0 : 1)};
  background: ${(props) => props.theme.lightFontColor};
  z-index:  ${(props) => (props.loaded ? 0 : 1000)};
`;

const Loader = ({ isLoaded }) => {
  return (
    <LoaderContainer loaded={isLoaded}>
      <ParticlesBg type="cobweb" bg={true} />
    </LoaderContainer>
  );
};

export default Loader;
