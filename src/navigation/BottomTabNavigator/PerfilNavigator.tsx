import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PerfilPage from '@screens/Perfil/PerfilPage';
import globalStyles from '../globalStyles';
import type { PerfilStackParamList } from '../types';

const Stack = createNativeStackNavigator<PerfilStackParamList>();

const PerfilNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      <Stack.Screen name="PerfilPage" component={PerfilPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default PerfilNavigator;
