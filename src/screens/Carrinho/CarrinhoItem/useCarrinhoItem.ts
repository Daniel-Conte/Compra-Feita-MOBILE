import { useState } from 'react';

import useAppStore from '@store/App';
import carrinhoApi from '@services/carrinho';
import parseError from '@utils/parseError';
import type { CarrinhoListItem } from '@services/carrinho/types';

const useCarrinhoItem = (item: CarrinhoListItem) => {
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const [counter, _setCounter] = useState(item.quantidade);

  const onAddCounter = () => {
    _setCounter(curr => {
      const quantidade = curr + 1;

      _onUpdate(quantidade);
      return quantidade;
    });
  };

  const onRemoveCounter = () => {
    _setCounter(curr => {
      const quantidade = curr - 1;

      _onUpdate(quantidade);
      return quantidade;
    });
  };

  const _onUpdate = async (quantidade: number) => {
    try {
      await carrinhoApi.updateQuantidade({ codigo: item.codigo, quantidade });
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  return { counter, onAddCounter, onRemoveCounter };
};

export default useCarrinhoItem;
