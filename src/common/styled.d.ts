import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        lightGray: string;
        lightGray2: string;
        darkGray: string;
      }
      primary: IPalette;
      secondary: IPalette;
   }
  }
}