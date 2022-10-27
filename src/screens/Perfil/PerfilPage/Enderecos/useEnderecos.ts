import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import useAppStore from '@store/App';
import parseError from '@utils/parseError';
import enderecoApi from '@services/endereco';
import type { Endereco } from '@services/endereco/types';
import type { PerfilScreenNavigationProp } from '@navigation/types';
import type { EnderecoOption } from './EnderecoOptions/types';

const useEnderecos = () => {
  const navigation = useNavigation<PerfilScreenNavigationProp>();
  const [enderecoSelecionado, _setEnderecoSelecionado] = useState<Endereco | null>(null);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const [enderecosList, _setEnderecosList] = useState<Endereco[]>([]);

  useFocusEffect(
    useCallback(() => {
      _getEnderecos();
    }, []),
  );

  const _getEnderecos = async () => {
    try {
      const resp = await enderecoApi.getAll();

      if (resp?.data) _setEnderecosList(resp.data);
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  const onAdd = () => navigation.push('EnderecoForm', { mode: 'new' });

  const onEdit = () => {
    if (enderecoSelecionado)
      navigation.push('EnderecoForm', { mode: 'edit', codigoEndereco: enderecoSelecionado.codigo });

    onDismissDialog();
  };

  const onDelete = async () => {
    try {
      if (!enderecoSelecionado) throw 'Ocorreu um erro ao excluir o endereço';

      toggleLoading(true);
      const res = await enderecoApi.delete(enderecoSelecionado.codigo);

      if (res?.data?.message) toggleSnackbar({ title: res.data?.message, variant: 'success' });

      _getEnderecos();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);

      onDismissDialog();
    }
  };

  const onPressItem = (item: Endereco) => _setEnderecoSelecionado(item);

  const onDismissDialog = () => _setEnderecoSelecionado(null);

  const enderecoOptions: EnderecoOption[] = [
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
    enderecosList,
    enderecoOptions,
    onAdd,
    onDismissDialog,
    enderecoSelecionado,
    onPressItem,
  };
};

export default useEnderecos;
