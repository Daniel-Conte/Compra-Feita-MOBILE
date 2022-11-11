import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import pedidoApi from '@services/pedido';
import useUserStore from '@store/User';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';
import type { PedidosScreenRouteProp } from '@navigation/types';
import type { Pedido } from '@services/pedido/types';

const usePedidoDetails = () => {
  const route = useRoute<PedidosScreenRouteProp<'PedidoDetails'>>();
  const user = useUserStore(state => state.user);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const [pedido, _setPedido] = useState<Pedido | null>(null);

  useEffect(() => {
    const fetchPedido = async (codigo: number) => {
      try {
        const pedido = await pedidoApi.get(codigo);

        if (pedido?.data) _setPedido(pedido.data);
      } catch (error) {
        const message = parseError(error);

        toggleSnackbar({ title: message, variant: 'danger' });
      }
    };

    const codigoPedido = route.params.codigoPedido;

    if (codigoPedido) fetchPedido(codigoPedido);
  }, []);

  const getEndereco = () => {
    if (!pedido) return '';

    let endereco = `${pedido.endereco.rua}, ${pedido.endereco.numero}, ${pedido.endereco.bairro}`;

    if (pedido.endereco.complemento) endereco += `, ${pedido.endereco.complemento}`;

    return endereco;
  };

  return { pedido, getEndereco, user };
};

export default usePedidoDetails;
