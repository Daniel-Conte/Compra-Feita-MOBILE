import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PedidosList from '@screens/Pedidos/List';
import PedidoCreate from '@screens/Pedidos/Create';
import globalStyles from '../globalStyles';
import type { PedidosStackParamList } from '../types';

const Stack = createNativeStackNavigator<PedidosStackParamList>();

const PedidosNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      <Stack.Screen name="PedidosList" component={PedidosList} options={{ headerShown: false }} />
      <Stack.Screen name="PedidoCreate" component={PedidoCreate} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default PedidosNavigator;
