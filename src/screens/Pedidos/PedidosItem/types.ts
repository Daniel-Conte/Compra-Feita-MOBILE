import type { PedidosListItem } from '@services/pedido/types';

export interface PedidosItemProps {
  pedido: PedidosListItem;
  onPress: (pedido: PedidosListItem) => void;
}
