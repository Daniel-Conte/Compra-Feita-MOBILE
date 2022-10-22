import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { CarrinhoStackScreenProps } from '@navigation/types';

const CarrinhoNotLoggedIn = ({ navigation }: CarrinhoStackScreenProps<'NotLoggedIn'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você precisa entrar para ver seu carrinho de compras</Text>

      <Button mode="contained" onPress={() => navigation.navigate('Auth')} icon="sign-in">
        Entrar
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
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default CarrinhoNotLoggedIn;
