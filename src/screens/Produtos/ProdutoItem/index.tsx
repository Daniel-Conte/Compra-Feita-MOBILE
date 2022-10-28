import { Surface, Text } from 'react-native-paper';

import produtoItemStyles from './styles';
import type { ProdutoItemProps } from '../types';

const ProdutoItem = ({ produto }: ProdutoItemProps) => {
  return (
    <Surface style={produtoItemStyles.container}>
      <Text>{produto.nome}</Text>
    </Surface>
  );
};

export default ProdutoItem;
