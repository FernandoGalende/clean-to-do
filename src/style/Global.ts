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
    background: ${getColor('cool-gray-900')};
    > div {
        height  : 100%;
    }
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

.responsive-video {
    width: 100%;
    height: 100%;
}

  body {
    background-color: background-01;
  }

  #root {
    display: grid;
    place-items: center;
    grid-template-rows: 1fr;
    width: 100vw;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
