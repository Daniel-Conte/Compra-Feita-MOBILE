import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import type { CarrinhoStackScreenProps } from '@navigation/types';
import styles from './styles';

const CarrinhoEmptyState = ({ navigation }: CarrinhoStackScreenProps<'EmptyState'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicione produtos ao seu carrinho de compras</Text>

      <Button mode="contained" onPress={() => navigation.navigate('Produtos')}>
        Adicionar produtos
      </Button>
    </View>
  );
};

export default CarrinhoEmptyState;
