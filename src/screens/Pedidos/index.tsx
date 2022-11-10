import { View, FlatList } from 'react-native';

import usePedidos from './usePedidos';
import PedidosItem from './PedidosItem';
import type { PedidosListProps } from './types';

const PedidosList = ({}: PedidosListProps) => {
  const { pedidosList } = usePedidos();

  return (
    <View>
      <FlatList
        data={pedidosList.map(pedido => ({ key: pedido.codigo, pedido }))}
        renderItem={({ item }) => <PedidosItem pedido={item.pedido} />}
      />
    </View>
  );
};

export default PedidosList;
