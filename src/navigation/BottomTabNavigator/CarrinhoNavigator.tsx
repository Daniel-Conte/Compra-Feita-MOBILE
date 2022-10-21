import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CarrinhoList from '@screens/Carrinho/List';
import globalStyles from '../globalStyles';
import type { CarrinhoStackParamList } from '../types';

const Stack = createNativeStackNavigator<CarrinhoStackParamList>();

const CarrinhoNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      <Stack.Screen name="CarrinhoList" component={CarrinhoList} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default CarrinhoNavigator;
