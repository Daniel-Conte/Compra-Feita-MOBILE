import type { PedidosListItem } from '@services/pedido/types';

const usePedidosItem = (item: PedidosListItem) => {
  const getDate = () => {
    const date = new Date(item.data);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const statusPedido = {
    0: 'Aguardando',
    1: 'Confirmado',
    2: 'Negado',
    3: 'Cancelado',
    4: 'Em preparação',
    5: 'Finalizado',
  };

  return { statusPedido, getDate };
};

export default usePedidosItem;
