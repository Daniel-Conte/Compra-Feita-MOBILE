import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PedidoCreate from '@screens/Pedido/PedidoCreate';
import globalStyles from './globalStyles';
import type { PedidoStackParamList } from './types';

const Stack = createNativeStackNavigator<PedidoStackParamList>();

const PedidoNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      <Stack.Screen
        name="PedidoCreate"
        component={PedidoCreate}
        options={{ headerTitle: 'Novo Pedido' }}
      />
    </Stack.Navigator>
  );
};

export default PedidoNavigator;
