import create from 'zustand';

import type { UserStore } from './types';

const useUserStore = create<UserStore>(set => ({
  codigo: 0,
  nome: '',
  email: '',
  telefone: '',
  admin: 0,
  atualizadoEm: null,
  criadoEm: null,
  exp: 0,
  iat: 0,

  setUser: user => set({ ...user }),
}));

export default useUserStore;
