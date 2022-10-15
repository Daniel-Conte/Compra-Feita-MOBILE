import { Theme, DefaultTheme, DarkTheme, Colors } from 'react-native-paper';

export default {
  light: {
    ...DefaultTheme,
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1970E6',
      accent: '#E6A019',
      text: '#06102a',
      error: Colors.red700,
    },
  },
  dark: { ...DarkTheme },
} as { light: Theme; dark: Theme };
