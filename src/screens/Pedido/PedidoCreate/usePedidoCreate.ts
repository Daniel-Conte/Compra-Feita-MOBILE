import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import carrinhoApi from '@services/carrinho';
import enderecoApi from '@services/endereco';
import pedidoApi from '@services/pedido';
import useAppStore from '@store/App';
import useCarrinhoStore from '@store/Carrinho';
import parseError from '@utils/parseError';
import type { CarrinhoListItem } from '@services/carrinho/types';
import type { Endereco } from '@services/endereco/types';
import type { SelectItem } from '@components/Select/types';
import type { PedidoScreenNavigationProp } from '@navigation/types';
import type { PedidoCreateFormValues } from './types';

const usePedidoCreate = () => {
  const navigation = useNavigation<PedidoScreenNavigationProp>();
  const [pedidoItensList, _setPedidoItensList] = useState<CarrinhoListItem[]>([]);
  const [enderecos, _setEnderecos] = useState<Endereco[]>([]);
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const setQuantidadeCarrinho = useCarrinhoStore(state => state.setQuantidade);

  useEffect(() => {
    _getPedidoItensList();
    _getEnderecos();
  }, []);

  const _getPedidoItensList = async () => {
    try {
      const resp = await carrinhoApi.getList();

      if (resp?.data) _setPedidoItensList(resp.data);
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  const _getEnderecos = async () => {
    try {
      const resp = await enderecoApi.getAll();

      if (resp?.data) _setEnderecos(resp.data);
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  const getPrecoTotalPedido = () =>
    pedidoItensList.reduce((total, curr) => (total += curr.precoUnitario * curr.quantidade), 0);

  const onCreatePedido = async (data: PedidoCreateFormValues) => {
    try {
      toggleLoading(true);
      const resp = await pedidoApi.insert({
        enderecoCodigo: data.enderecoCodigo,
        metodoPagamento: data.metodoPagamento,
        itens: pedidoItensList.map(item => item.codigo),
        pagamentoDinheiro: data.metodoPagamento === 2 ? data.pagamentoDinheiro : undefined,
      });

      if (!resp?.data) throw new Error('Ocorreu um erro ao criar o pedido');

      setQuantidadeCarrinho(0);
      toggleSnackbar({ title: resp.data.message, variant: 'success' });
      navigation.navigate('Root', { screen: 'Pedidos' });
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  const metodosPagamento: SelectItem[] = [
    {
      title: 'Cartão',
      value: 1,
    },
    {
      title: 'Dinheiro',
      value: 2,
    },
  ];

  return { onCreatePedido, pedidoItensList, getPrecoTotalPedido, metodosPagamento, enderecos };
};

export default usePedidoCreate;
