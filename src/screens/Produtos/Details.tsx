import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { ProdutosStackScreenProps } from '@navigation/types';

const ProdutoDetails = ({ navigation, route }: ProdutosStackScreenProps<'ProdutosDetails'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto {route.params.nome}</Text>

      <Button mode="contained" onPress={() => navigation.goBack()} icon="camera">
        Go back
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

export default ProdutoDetails;
