import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import produtoApi from '@services/produto';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';
import type { ProdutosScreenRouteProp } from '@navigation/types';
import type { Produto } from '@services/produto/types';

const useProdutoDetails = () => {
  const route = useRoute<ProdutosScreenRouteProp<'ProdutoDetails'>>();
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const [produto, _setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    const fetchProduto = async (codigo: number) => {
      try {
        const produto = await produtoApi.get(codigo);

        if (produto?.data) _setProduto(produto.data);
      } catch (error) {
        const message = parseError(error);

        toggleSnackbar({ title: message, variant: 'danger' });
      }
    };

    const codigoProduto = route.params.codigoProduto;

    if (codigoProduto) fetchProduto(codigoProduto);
  }, []);

  return { produto };
};

export default useProdutoDetails;
