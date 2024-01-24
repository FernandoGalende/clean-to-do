import { createGlobalStyle, getColor } from '@xstyled/styled-components';

export const GlobalAppStyle = createGlobalStyle`
  * {
      -webkit-overflow-scrolling: touch;
      box-sizing: border-box;
  }

  :root {
      font-size: 16px;
  }

  body {
      margin: 0;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${getColor('surface-background-primary')};
  }

  input:focus,
  textarea:focus {
      outline: none !important;
      border: 1px solid ${getColor('cool-gray-400')};
  }

  button:focus {
      outline: none;
  }

  a {
      text-decoration: none;
  }



  #root {
    display: grid;
    place-items: center;
    grid-template-rows: 1fr;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
