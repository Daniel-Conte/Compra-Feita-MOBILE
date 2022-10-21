import { DefaultTheme, DarkTheme, Colors } from 'react-native-paper';

import type { Theme, VariantStyles } from './types';

const themes: { light: Theme; dark: Theme } = {
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
};

const colorVariants = {
  success: Colors.green500,
  warning: Colors.amber600,
  danger: Colors.red600,
};

const variantStyles: VariantStyles = {
  success: { onSurface: colorVariants.success, accent: Colors.black },
  danger: { onSurface: colorVariants.danger, accent: Colors.greenA200 },
  warning: {
    onSurface: colorVariants.warning,
    accent: Colors.blue800,
    surface: Colors.black,
  },
};

export { colorVariants, variantStyles };
export default themes;
