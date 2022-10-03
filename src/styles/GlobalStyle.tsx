import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { darkTheme } from './dark';
import { lightTheme } from './light';

interface ThemeType {
  theme: typeof lightTheme | typeof darkTheme;
}

const GlobalStyle = createGlobalStyle<ThemeType>`
  ${reset}

  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  body {
    transition-property: background, color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
  }
`;

export default GlobalStyle;
