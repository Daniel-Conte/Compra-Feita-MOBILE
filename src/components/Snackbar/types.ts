import { SnackbarProps as PaperSnackbarProps } from 'react-native-paper';

import type { Variant } from '@config/Theme/types';

export interface SnackbarProps extends Omit<PaperSnackbarProps, 'theme'> {
  variant?: Variant;
}
