import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import useAppStore from '@store/App';
import useUserStore from '@store/User';
import pedidosApi from '@services/pedido';
import parseError from '@utils/parseError';
import type { PedidosListItem } from '@services/pedido/types';

const usePedidos = () => {
  const user = useUserStore(state => state.user);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const [pedidosList, _setPedidosList] = useState<PedidosListItem[]>([]);

  useFocusEffect(
    useCallback(() => {
      _getPedidosList();
    }, []),
  );

  const _getPedidosList = async () => {
    try {
      let resp;

      if (user?.admin) resp = await pedidosApi.getAllList();
      else resp = await pedidosApi.getUserList();

      if (resp?.data) _setPedidosList(resp.data);
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  return { pedidosList };
};

export default usePedidos;
