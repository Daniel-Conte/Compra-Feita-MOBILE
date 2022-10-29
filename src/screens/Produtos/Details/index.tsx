import { View } from 'react-native';
import { Text } from 'react-native-paper';

import useProdutoDetails from './useProdutoDetails';
import produtoDetailsStyles from './styles';
import type { ProdutoDetailsProps } from './types';

const ProdutoDetails = ({}: ProdutoDetailsProps) => {
  const { produto } = useProdutoDetails();

  if (!produto) return null;

  return (
    <View style={produtoDetailsStyles.container}>
      <Text style={produtoDetailsStyles.title}>{produto.nome}</Text>
    </View>
  );
};

export default ProdutoDetails;
