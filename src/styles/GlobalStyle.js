import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: ${(props) => props.theme.primaryFont};;
    }

    html,
    body {
      margin: 0;
    }

`;

export default GlobalStyle;
