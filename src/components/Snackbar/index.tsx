import { Snackbar as PaperSnackbar, useTheme } from 'react-native-paper';

import { variantStyles } from '@config/Theme';
import type { SnackbarProps } from './types';

const Snackbar = ({ variant, ...props }: SnackbarProps) => {
  const customTheme = variant ? variantStyles[variant] : {};
  const theme = useTheme({ colors: { ...customTheme } });

  return <PaperSnackbar theme={theme} {...props} />;
};

export default Snackbar;
