import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
      lightGray: '#8e9fad',
      lightGray2: '#afafaf',
      darkGray: '#1e1e1e',
    },
    primary: {
      main: '#76b900',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff'
    }
  }
}

export const breakPoints = {
  smallScreen: '1296px',
  tablet: '990px',
  mobile: '672px'
}