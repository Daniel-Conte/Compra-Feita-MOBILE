import carrinhoApi from '@services/carrinho';
import create from 'zustand';

import type { CarrinhoStore } from './types';

const useCarrinhoStore = create<CarrinhoStore>(set => ({
  quantidade: 0,

  getQuantidade: async () => {
    try {
      const resp = await carrinhoApi.getList();

      if (resp?.data) set({ quantidade: resp.data.length });
    } catch (error) {}
  },
  setQuantidade: quantidade => set({ quantidade }),
  increaseQuantidade: () => set(state => ({ quantidade: state.quantidade + 1 })),
  decreaseQuantidade: () => set(state => ({ quantidade: state.quantidade - 1 })),
}));

export default useCarrinhoStore;
