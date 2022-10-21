import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { PerfilStackScreenProps } from '@navigation/types';

const PerfilPage = ({ navigation }: PerfilStackScreenProps<'PerfilPage'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
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

export default PerfilPage;
