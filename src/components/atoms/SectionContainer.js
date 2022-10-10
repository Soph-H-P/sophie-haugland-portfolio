import styled, { css } from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.home ? 'calc(100vh + 68px)' : 'max-content')};
  padding: 20px 0px;
  scroll-margin-top: ${(props) => (props.contact ? '-150px' : '0px')};

  ${(props) =>
    props.home &&
    css`
      justify-content: center;
      height: 100vh;
    `}
  ${(props) =>
    props.contact &&
    css`
      min-height: calc(100vh - 68px);
    `}

  ${(props) =>
    props.aboutSection &&
    css`
      &::before {
        content: '';
        height: 3px;
        width: 80%;
        background: ${(props) => props.theme.darkFontColor};
        position: absolute;
        top: 0px;
        border-radius: 2px;
      }
    `}
    
    ${(props) =>
    !props.home &&
    css`
      padding-top: 100px;
      @media (min-height: 900px) and (max-height: 1310px) and (min-width: 900px) {
        height: 100vh;
      }

      @media (max-width: 600px) {
        scroll-margin-top: -68px;
      }
    `}
      ${(props) =>
    props.portfolioSection &&
    css`
      height: max-content !important;
    `}
`;

export default SectionContainer;
