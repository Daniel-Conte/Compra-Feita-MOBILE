import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import useAppStore from '@store/App';
import useCarrinhoStore from '@store/Carrinho';
import carrinhoApi from '@services/carrinho';
import parseError from '@utils/parseError';
import type { CarrinhoListItem } from '@services/carrinho/types';
import type { CarrinhoScreenNavigationProp } from '@navigation/types';

const useCarrinho = () => {
  const navigation = useNavigation<CarrinhoScreenNavigationProp>();
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const decreaseQuantidadeCarrinho = useCarrinhoStore(state => state.decreaseQuantidade);
  const [carrinhoList, _setCarrinhoList] = useState<CarrinhoListItem[]>([]);

  useFocusEffect(
    useCallback(() => {
      _getCarrinhoList();
    }, []),
  );

  const _getCarrinhoList = async () => {
    try {
      const resp = await carrinhoApi.getList();

      if (resp?.data) _setCarrinhoList(resp.data);
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  const onCreatePedido = () => {
    navigation.navigate('Pedido', { screen: 'PedidoCreate' });
  };

  const onRemoveItem = async (codigo: number) => {
    try {
      await carrinhoApi.delete(codigo);

      _getCarrinhoList();
      decreaseQuantidadeCarrinho();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  return { carrinhoList, onRemoveItem, onCreatePedido };
};

export default useCarrinho;
