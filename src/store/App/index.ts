import create from 'zustand';

import type { AppStore } from './types';

const useAppStore = create<AppStore>(set => ({
  loading: false,
  snackbar: null,

  toggleLoading: loading => set({ loading }),
  toggleSnackbar: snackbar => set({ snackbar }),
}));

export default useAppStore;
