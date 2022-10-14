import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { AuthStackScreenProps } from '@navigation/types';

const Login = ({ navigation }: AuthStackScreenProps<'Login'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Button mode="contained" onPress={() => navigation.push('Cadastro')} icon="camera">
        Cadastrar-se
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

export default Login;
