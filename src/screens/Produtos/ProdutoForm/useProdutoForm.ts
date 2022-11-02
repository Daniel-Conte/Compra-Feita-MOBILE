import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import produtoApi from '@services/produto';
import categoriaApi from '@services/categoria';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';
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
    /* const fetchProduto = async (codigo: number) => {
      try {
        toggleLoading(true);
        const produto = await produtoApi.get(codigo);

        if (produto?.data) {
          _setInitialValues({
            ...produto.data,
            cep: cepMask(produto.data.cep),
          } as ProdutoFormValues);
        }
      } catch (error) {
        const message = parseError(error);

        toggleSnackbar({ title: message, variant: 'danger' });
      } finally {
        toggleLoading(false);
      }
    }; */
    const fetchCategorias = async () => {
      try {
        const list = await categoriaApi.getAll();

        if (list?.data) _setCategoriasList(list.data);
      } catch (error) {
        const message = parseError(error);

        toggleSnackbar({ title: message, variant: 'danger' });
      }
    };

    //if (route.params.mode === 'edit') fetchProduto(route.params.codigoProduto);
    fetchCategorias();
  }, []);

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
