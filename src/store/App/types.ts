import type { SnackbarProps as PaperSnackbarProps } from 'react-native-paper';

import type { Variant } from '@config/Theme/types';

export interface AppStore {
  loading: boolean;
  snackbar: SnackbarProps | null;

  toggleLoading: (loading: boolean) => void;
  toggleSnackbar: (snackbar: SnackbarProps | null) => void;
}

export interface SnackbarProps
  extends SomePartial<Omit<PaperSnackbarProps, 'theme' | 'visible' | 'children'>, 'onDismiss'> {
  title: string;
  variant?: Variant;
}
