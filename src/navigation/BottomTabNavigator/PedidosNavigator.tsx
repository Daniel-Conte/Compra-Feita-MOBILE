import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useUserStore from '@store/User';
import PedidosList from '@screens/Pedidos';
import PedidoDetails from '@screens/Pedidos/PedidoDetails';
import PedidoCancelarNegar from '@screens/Pedidos/PedidoCancelarNegar';
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
          <Stack.Screen name="PedidosList" component={PedidosList} options={{ title: 'Pedidos' }} />
          <Stack.Screen
            name="PedidoDetails"
            component={PedidoDetails}
            options={{ title: 'Detalhes do pedido' }}
          />
          <Stack.Screen
            name="PedidoCancelarNegar"
            component={PedidoCancelarNegar}
            options={({ route }) => ({ title: `${route.params.mode} pedido` })}
          />
        </>
      ) : (
        <Stack.Screen
          name="NotLoggedIn"
          component={PedidosNotLoggedIn}
          options={{ title: 'Pedidos' }}
        />
      )}
    </Stack.Navigator>
  );
};

export default PedidosNavigator;
