import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { AuthStackScreenProps } from '@navigation/types';

const Cadastro = ({ navigation }: AuthStackScreenProps<'Cadastro'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

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

export default Cadastro;
