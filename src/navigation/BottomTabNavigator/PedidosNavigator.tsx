import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useUserStore from '@store/User';
import PedidosList from '@screens/Pedidos/List';
import PedidosNotLoggedIn from '@screens/Pedidos/NotLoggedIn';
import globalStyles from '../globalStyles';
import type { PedidosStackParamList } from '../types';

const Stack = createNativeStackNavigator<PedidosStackParamList>();

const PedidosNavigator = () => {
  const isLoggedIn = useUserStore(state => !!state.user);

  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="PedidosList"
            component={PedidosList}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="NotLoggedIn"
          component={PedidosNotLoggedIn}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default PedidosNavigator;
