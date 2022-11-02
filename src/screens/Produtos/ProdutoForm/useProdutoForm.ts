import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import produtoApi from '@services/produto';
import categoriaApi from '@services/categoria';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';
import { currencyMask } from '@components/Form/masks/currency';
import { decimalMask } from '@components/Form/masks/decimal';
import { numberMask } from '@components/Form/masks/number';
import type { ProdutosScreenNavigationProp, ProdutosScreenRouteProp } from '@navigation/types';
import type { UpdateProdutoRequest } from '@services/produto/types';
import type { CategoriaListItem } from '@services/categoria/types';
import type { ProdutoFormValues } from './types';

const useProdutoForm = () => {
  const navigation = useNavigation<ProdutosScreenNavigationProp>();
  const route = useRoute<ProdutosScreenRouteProp<'ProdutoForm'>>();
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const [initialValues, _setInitialValues] = useState<ProdutoFormValues | undefined>(undefined);
  const [categoriasList, _setCategoriasList] = useState<CategoriaListItem[]>([]);

  const mode = route.params.mode;

  useEffect(() => {
    if (route.params.mode === 'edit') fetchProduto(route.params.codigoProduto);

    fetchCategorias();
  }, []);

  const fetchProduto = async (codigo: number) => {
    try {
      toggleLoading(true);
      const produto = await produtoApi.get(codigo);

      if (produto?.data) {
        const { atualizadoEm, categoria, criadoEm, ...aux } = { ...produto.data };

        _setInitialValues({
          ...aux,
          codigoCategoria: {
            title: categoria?.nome,
            value: categoria,
          },
          imagens: produto.data.imagens?.map(img => ({ codigo: img.codigo, base64: img.imagem })),
          precoUnitario: currencyMask(produto.data.precoUnitario),
          altura: decimalMask(produto.data.altura),
          estoque: numberMask(String(produto.data.estoque)),
          comprimento: decimalMask(produto.data.comprimento),
          largura: decimalMask(produto.data.largura),
        } as any);
      }
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  const fetchCategorias = async () => {
    try {
      const list = await categoriaApi.getAll();

      if (list?.data) _setCategoriasList(list.data);
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  const onSubmit = async (data: ProdutoFormValues) => {
    try {
      toggleLoading(true);
      let resp;

      if (mode === 'new') {
        resp = await produtoApi.insert(data);
      } else if (mode === 'edit' && data.codigo) {
        resp = await produtoApi.update(data as UpdateProdutoRequest);
      } else {
        throw new Error('Ocorreu um erro ao salvar o produto');
      }

      if (!resp?.data) throw new Error('Ocorreu um erro ao salvar');

      toggleSnackbar({ title: resp.data.message, variant: 'success' });
      navigation.pop();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  return { onSubmit, initialValues, mode, categoriasList };
};

export default useProdutoForm;
