import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  light: {
    mainBackground: '#fff',
    border: '#e2e2e2',
    divider: 'blue',
    cardBackground: '#dcd8d8',
    background: '#f0f0f0',
    text: '#000000',
  },
  dark: {
    mainBackground: '#000',
    border: '#181818',
    divider: 'red',
    cardBackground: '#262626',
    background: '#161616',
    text: '#a7a6a6',
  },
};

const styles = {
  global: (props: { colorMode: 'light' | 'dark' }) => ({
    body: {
      bg: colors[props.colorMode].background,
      color: colors[props.colorMode].text,
    },
  }),
};

const theme = extendTheme({ config, colors, styles });

export default theme;
