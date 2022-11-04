import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import produtoApi from '@services/produto';
import carrinhoApi from '@services/carrinho';
import useUserStore from '@store/User';
import useAppStore from '@store/App';
import useCarrinhoStore from '@store/Carrinho';
import parseError from '@utils/parseError';
import type { ProdutosScreenNavigationProp, ProdutosScreenRouteProp } from '@navigation/types';
import type { Produto } from '@services/produto/types';
import type { MenuQtd } from './types';

const useProdutoDetails = () => {
  const route = useRoute<ProdutosScreenRouteProp<'ProdutoDetails'>>();
  const navigation = useNavigation<ProdutosScreenNavigationProp>();
  const user = useUserStore(state => state.user);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const increaseQuantidadeCarrinho = useCarrinhoStore(state => state.increaseQuantidade);
  const [produto, _setProduto] = useState<Produto | null>(null);
  const [menuQtd, _setMenuQtd] = useState<MenuQtd>({ visible: false, qtd: 1 });

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

  const onOpenMenuQtd = () => _setMenuQtd(curr => ({ ...curr, visible: true }));

  const onDismissMenuQtd = () => _setMenuQtd(curr => ({ ...curr, visible: false }));

  const onSetQtd = (qtd: number) => _setMenuQtd({ qtd, visible: false });

  const onAddToCart = async (prod: Produto) => {
    try {
      if (!user) {
        return toggleSnackbar({
          title: 'Entre para adicionar ao carrinho',
          variant: 'warning',
          action: {
            label: 'Entrar',
            onPress: () => navigation.navigate('Auth', { screen: 'Login' }),
          },
        });
      }

      toggleLoading(true);
      const res = await carrinhoApi.insert({ codigoProduto: prod.codigo, quantidade: menuQtd.qtd });
      increaseQuantidadeCarrinho();

      if (res?.data?.message) toggleSnackbar({ title: res.data.message, variant: 'success' });
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  return { produto, onAddToCart, menuQtd, onSetQtd, onDismissMenuQtd, onOpenMenuQtd };
};

export default useProdutoDetails;
