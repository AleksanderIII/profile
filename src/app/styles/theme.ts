import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  light: {
    mainBackground: '#fff',
    border: '#e2e2e2',
    divider: '#2a2a2a',
    background: '#f0f0f0',
    text: '#000000',
  },
  dark: {
    mainBackground: '#000',
    border: '#181818',
    divider: '#000',
    background: '#161616',
    text: '#ffffff',
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
