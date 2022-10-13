import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { CarrinhoStackScreenProps } from '@navigation/types';

const CarrinhoList = ({ navigation }: CarrinhoStackScreenProps<'CarrinhoList'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de compras</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CarrinhoList;
