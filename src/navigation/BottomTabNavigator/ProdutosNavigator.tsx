import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProdutosList from '@screens/Produtos/List';
import ProdutoDetails from '@screens/Produtos/Details';
import { ProdutosStackParamList } from '../types';

const Stack = createNativeStackNavigator<ProdutosStackParamList>();

const ProdutosNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProdutosList" component={ProdutosList} options={{ headerShown: false }} />
      <Stack.Screen
        name="ProdutosDetails"
        component={ProdutoDetails}
        options={{ title: 'Detalhes' }}
      />
    </Stack.Navigator>
  );
};

export default ProdutosNavigator;
