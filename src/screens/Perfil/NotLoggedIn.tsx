import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { PerfilStackScreenProps } from '@navigation/types';

const PerfilNotLoggedIn = ({ navigation }: PerfilStackScreenProps<'NotLoggedIn'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você precisa entrar para ver seu perfil</Text>

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

export default PerfilNotLoggedIn;
