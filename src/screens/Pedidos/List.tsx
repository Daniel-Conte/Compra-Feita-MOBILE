import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { PedidosStackScreenProps } from '@navigation/types';

const PedidosList = ({ navigation }: PedidosStackScreenProps<'PedidosList'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de pedidos</Text>

      <Button mode="contained" onPress={() => navigation.navigate('Auth')} icon="camera">
        Fazer login
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

export default PedidosList;
