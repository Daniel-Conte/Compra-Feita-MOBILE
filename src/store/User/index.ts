import create from 'zustand';

import type { UserStore } from './types';

const useUserStore = create<UserStore>(set => ({
  user: null,

  setUser: user => set({ user }),
}));

export default useUserStore;
