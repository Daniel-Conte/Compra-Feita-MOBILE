import type { PedidosListItem } from '@services/pedido/types';

const usePedidosItem = (item: PedidosListItem) => {
  const getDate = () => {
    const date = new Date(item.data);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return { getDate };
};

export default usePedidosItem;
