import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { PedidosStackScreenProps } from '@navigation/types';

const PedidosList = ({ navigation }: PedidosStackScreenProps<'PedidosList'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de pedidos</Text>
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

export default PedidosList;
