import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.home ? 'calc(100vh + 68px)' : 'calc(100vh - 68px)')};
  border: pink 3px dotted;
  scroll-margin-top: 68px;
  scroll-behaviour: smooth;
`;

export default SectionContainer;
