import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useUserStore from '@store/User';
import CarrinhoList from '@screens/Carrinho/List';
import CarrinhoNotLoggedIn from '@screens/Carrinho/NotLoggedIn';
import globalStyles from '../globalStyles';
import type { CarrinhoStackParamList } from '../types';

const Stack = createNativeStackNavigator<CarrinhoStackParamList>();

const CarrinhoNavigator = () => {
  const isLoggedIn = useUserStore(state => !!state.user);

  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      {isLoggedIn ? (
        <Stack.Screen
          name="CarrinhoList"
          component={CarrinhoList}
          options={{ headerShown: false }}
        />
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
