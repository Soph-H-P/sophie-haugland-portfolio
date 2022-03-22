import styled from 'styled-components';

const Subtitle = styled.h2`
  font-family: ${(props) => props.theme.headingFont};
  font-weight: normal;
  font-size: 47px;
  color: ${(props) => props.theme.lightFontColor};
  margin: 0px;

  @media (max-width: 650px) {
    font-size: 33px;
  }
`;

export default Subtitle;
