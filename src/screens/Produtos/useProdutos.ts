import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import produtoApi from '@services/produto';
import type { ProdutoListItem } from '@services/produto/types';
import type { ProdutosScreenNavigationProp } from '@navigation/types';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';

const useProdutos = () => {
  const navigation = useNavigation<ProdutosScreenNavigationProp>();
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const [produtosList, _setProdutosList] = useState<ProdutoListItem[]>([]);

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

  const onPressProdutoItem = (item: ProdutoListItem) => {
    navigation.push('ProdutoDetails', { codigoProduto: item.codigo });
  };

  return { produtosList, onPressProdutoItem };
};

export default useProdutos;
