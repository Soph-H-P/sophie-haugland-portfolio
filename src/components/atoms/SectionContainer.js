import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.home ? 'center' : 'start')};
  align-items: center;
  height: ${(props) => (props.home ? 'calc(100vh + 68px)' : 'max-content')};
  padding: 20px 0px;
  scroll-margin-top: 68px;

  @media (max-width: 600px) {
    scroll-margin-top: 0px;
  }
`;

export default SectionContainer;
