import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import produtoApi from '@services/produto';
import useAppStore from '@store/App';
import useUserStore from '@store/User';
import parseError from '@utils/parseError';
import type { ProdutoListItem } from '@services/produto/types';
import type { ProdutosScreenNavigationProp } from '@navigation/types';
import type { ProdutoOption } from './ProdutoOptions/types';

const useProdutos = () => {
  const navigation = useNavigation<ProdutosScreenNavigationProp>();
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const user = useUserStore(state => state.user);
  const [produtosList, _setProdutosList] = useState<ProdutoListItem[]>([]);
  const [produtoSelecionado, _setProdutoSelecionado] = useState<ProdutoListItem | null>(null);

  useFocusEffect(
    useCallback(() => {
      _getProdutosList();
    }, []),
  );

  const _getProdutosList = async () => {
    try {
      const resp = await produtoApi.getList();

      if (resp?.data) _setProdutosList(resp.data);
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  const onPressItem = (item: ProdutoListItem) => {
    navigation.push('ProdutoDetails', { codigoProduto: item.codigo });
  };

  const onLongPressItem = (item: ProdutoListItem) => {
    if (!user?.admin) return;

    _setProdutoSelecionado(item);
  };

  const onDismissDialog = () => _setProdutoSelecionado(null);

  const onEdit = () => {
    if (produtoSelecionado)
      navigation.push('ProdutoForm', { mode: 'edit', codigoProduto: produtoSelecionado.codigo });

    onDismissDialog();
  };

  const onDelete = async () => {
    try {
      if (!produtoSelecionado) throw 'Ocorreu um erro ao excluir o produto';

      toggleLoading(true);
      const res = await produtoApi.delete(produtoSelecionado.codigo);

      if (res?.data?.message) toggleSnackbar({ title: res.data?.message, variant: 'success' });

      _getProdutosList();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);

      onDismissDialog();
    }
  };

  const produtoOptions: ProdutoOption[] = [
    {
      label: 'Editar',
      icon: 'edit',
      onPress: onEdit,
    },
    {
      label: 'Excluir',
      icon: 'trash-o',
      onPress: onDelete,
    },
  ];

  return {
    produtosList,
    onPressItem,
    produtoOptions,
    produtoSelecionado,
    onDismissDialog,
    onLongPressItem,
  };
};

export default useProdutos;
