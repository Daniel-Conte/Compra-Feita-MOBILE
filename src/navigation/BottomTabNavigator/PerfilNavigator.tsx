import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PerfilPage from '@screens/Perfil/PerfilPage';
import { PerfilStackParamList } from '../types';

const Stack = createNativeStackNavigator<PerfilStackParamList>();

const PerfilNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PerfilPage" component={PerfilPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default PerfilNavigator;
