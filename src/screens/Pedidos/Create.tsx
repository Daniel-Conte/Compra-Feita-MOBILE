import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { PedidosStackScreenProps } from '@navigation/types';

const PedidoCreate = ({ navigation, route }: PedidosStackScreenProps<'PedidoCreate'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Novo pedido com os produtos: {route.params.idProdutos.join(', ')}
      </Text>
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

export default PedidoCreate;
