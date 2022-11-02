import { Button } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProdutosList from '@screens/Produtos';
import ProdutoDetails from '@screens/Produtos/Details';
import ProdutoForm from '@screens/Produtos/ProdutoForm';
import useUserStore from '@store/User';
import type { User } from '@store/User/types';
import globalStyles from '../globalStyles';
import type { ProdutosStackParamList, ProdutosStackScreenProps } from '../types';

const Stack = createNativeStackNavigator<ProdutosStackParamList>();

const ProdutosNavigator = () => {
  const user = useUserStore(state => state.user);

  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      <Stack.Screen
        name="ProdutosList"
        component={ProdutosList}
        options={({ navigation }: ProdutosStackScreenProps<'ProdutosList'>) => ({
          title: 'Produtos',
          headerRight: getHeaderRight(user, navigation),
        })}
      />
      <Stack.Screen
        name="ProdutoDetails"
        component={ProdutoDetails}
        options={{
          title: 'Detalhes do produto',
        }}
      />

      {!!user?.admin && (
        <Stack.Screen
          name="ProdutoForm"
          component={ProdutoForm}
          options={({ route }) => ({
            title: route.params.mode === 'new' ? 'Novo Produto' : 'Editar Produto',
          })}
        />
      )}
    </Stack.Navigator>
  );
};

const getHeaderRight = (
  user: User | null,
  navigation: ProdutosStackScreenProps<'ProdutosList'>['navigation'],
) => {
  if (!user) {
    return () => (
      <Button
        mode="contained"
        onPress={() => navigation.push('Auth', { screen: 'Login' })}
        icon="sign-in">
        Entrar
      </Button>
    );
  }

  if (user.admin) {
    return () => (
      <Button
        mode="contained"
        onPress={() => navigation.push('ProdutoForm', { mode: 'new' })}
        icon="plus">
        Novo Produto
      </Button>
    );
  }
};

export default ProdutosNavigator;
