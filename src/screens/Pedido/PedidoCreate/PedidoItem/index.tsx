import { Surface, Text } from 'react-native-paper';

import { currencyMask } from '@components/Form/masks/currency';
import styles from './styles';
import type { PedidoItemProps } from './types';

const PedidoItem = ({ item }: PedidoItemProps) => {
  return (
    <Surface style={styles.container}>
      <Text style={styles.name}>{item.nomeProduto}</Text>

      <Text style={styles.quantity}>Quantidade: {item.quantidade}</Text>

      <Text style={styles.price}>Total: {currencyMask(item.precoUnitario * item.quantidade)}</Text>
    </Surface>
  );
};

export default PedidoItem;
