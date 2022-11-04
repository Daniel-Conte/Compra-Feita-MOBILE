import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useUserStore from '@store/User';
import useCarrinhoStore from '@store/Carrinho';
import CarrinhoList from '@screens/Carrinho';
import CarrinhoEmptyState from '@screens/Carrinho/EmptyState';
import CarrinhoNotLoggedIn from '@screens/Carrinho/NotLoggedIn';
import globalStyles from '../globalStyles';
import type { CarrinhoStackParamList } from '../types';

const Stack = createNativeStackNavigator<CarrinhoStackParamList>();

const CarrinhoNavigator = () => {
  const isLoggedIn = useUserStore(state => !!state.user);
  const quantidadeCarrinho = useCarrinhoStore(state => state.quantidade);

  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      {isLoggedIn ? (
        <>
          {!!quantidadeCarrinho ? (
            <Stack.Screen
              name="CarrinhoList"
              component={CarrinhoList}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="EmptyState"
              component={CarrinhoEmptyState}
              options={{ headerShown: false }}
            />
          )}
        </>
      ) : (
        <Stack.Screen
          name="NotLoggedIn"
          component={CarrinhoNotLoggedIn}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default CarrinhoNavigator;
