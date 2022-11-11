import { Caption, Surface, Text, Title } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native';

import { currencyMask } from '@components/Form/masks/currency';
import { STATUS_PEDIDO } from '@constants/index';
import usePedidosItem from './usePedidosItem';
import styles from './styles';
import type { PedidosItemProps } from './types';

const PedidosItem = ({ pedido, onPress }: PedidosItemProps) => {
  const { getDate } = usePedidosItem(pedido);

  return (
    <TouchableWithoutFeedback onPress={() => onPress(pedido)}>
      <Surface style={styles.container}>
        <Title style={styles.date}>{getDate()}</Title>
        <Caption style={styles.number}>Pedido N°{pedido.codigo}</Caption>

        <Text style={styles.status}>{STATUS_PEDIDO[pedido.status]}</Text>
        <Text style={styles.total}>Total: {currencyMask(pedido.valorTotal)}</Text>
      </Surface>
    </TouchableWithoutFeedback>
  );
};

export default PedidosItem;
