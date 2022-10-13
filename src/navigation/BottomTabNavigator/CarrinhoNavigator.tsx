import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CarrinhoList from '@screens/Carrinho/List';
import { CarrinhoStackParamList } from '../types';

const Stack = createNativeStackNavigator<CarrinhoStackParamList>();

const CarrinhoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CarrinhoList" component={CarrinhoList} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default CarrinhoNavigator;
