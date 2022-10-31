import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProdutosList from '@screens/Produtos';
import ProdutoDetails from '@screens/Produtos/Details';
import useUserStore from '@store/User';
import { Button } from 'react-native-paper';
import globalStyles from '../globalStyles';
import type { ProdutosStackParamList, ProdutosStackScreenProps } from '../types';

const Stack = createNativeStackNavigator<ProdutosStackParamList>();

const ProdutosNavigator = () => {
  const isloggedIn = useUserStore(state => !!state.user);

  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      <Stack.Screen
        name="ProdutosList"
        component={ProdutosList}
        options={({ navigation }: ProdutosStackScreenProps<'ProdutosList'>) => ({
          title: 'Produtos',
          headerRight: getLoginButton(isloggedIn, () =>
            navigation.push('Auth', { screen: 'Login' }),
          ),
        })}
      />
      <Stack.Screen
        name="ProdutoDetails"
        component={ProdutoDetails}
        options={{
          title: 'Detalhes do produto',
        }}
      />
    </Stack.Navigator>
  );
};

const getLoginButton = (isLoggedIn: boolean, onPress: () => void) => {
  if (isLoggedIn) return;

  return () => (
    <Button mode="contained" onPress={onPress} style={{ marginRight: 10 }} icon="sign-in">
      Entrar
    </Button>
  );
};

export default ProdutosNavigator;
