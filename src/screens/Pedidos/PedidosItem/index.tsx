import { Caption, Surface, Text, Title } from 'react-native-paper';

import { currencyMask } from '@components/Form/masks/currency';
import usePedidosItem from './usePedidosItem';
import styles from './styles';
import type { PedidosItemProps } from './types';

const PedidosItem = ({ pedido }: PedidosItemProps) => {
  const { statusPedido, getDate } = usePedidosItem(pedido);

  return (
    <Surface style={styles.container}>
      <Title style={styles.date}>{getDate()}</Title>
      <Caption style={styles.number}>Pedido N°{pedido.codigo}</Caption>

      <Text style={styles.status}>{statusPedido[pedido.status]}</Text>
      <Text style={styles.total}>Total: {currencyMask(pedido.valorTotal)}</Text>
    </Surface>
  );
};

export default PedidosItem;
