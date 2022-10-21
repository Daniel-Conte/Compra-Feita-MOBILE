import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { CarrinhoStackScreenProps } from '@navigation/types';

const CarrinhoList = ({ navigation }: CarrinhoStackScreenProps<'CarrinhoList'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de compras</Text>

      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate('Pedidos', {
            screen: 'PedidoCreate',
            params: { idProdutos: [12, 43, 22] },
          })
        }
        icon="camera">
        Criar pedido
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CarrinhoList;
