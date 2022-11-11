import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import useAppStore from '@store/App';
import useUserStore from '@store/User';
import pedidosApi from '@services/pedido';
import parseError from '@utils/parseError';
import type { PedidosListItem } from '@services/pedido/types';
import type { PedidosScreenNavigationProp } from '@navigation/types';

const usePedidos = () => {
  const navigation = useNavigation<PedidosScreenNavigationProp>();
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

  const onPressItem = (pedido: PedidosListItem) => {
    navigation.push('PedidoDetails', { codigoPedido: pedido.codigo });
  };

  return { pedidosList, onPressItem };
};

export default usePedidos;
