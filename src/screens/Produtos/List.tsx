import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { ProdutosStackScreenProps } from '@navigation/types';

const ProdutosList = ({ navigation }: ProdutosStackScreenProps<'ProdutosList'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem</Text>

      <Button
        mode="contained"
        onPress={() => navigation.push('ProdutosDetails', { nome: 'Cerveja' })}
        icon="camera">
        Open details
      </Button>
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

export default ProdutosList;
