import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useUserStore from '@store/User';
import PerfilPage from '@screens/Perfil/PerfilPage';
import PerfilNotLoggedIn from '@screens/Perfil/NotLoggedIn';
import globalStyles from '../globalStyles';
import type { PerfilStackParamList } from '../types';

const Stack = createNativeStackNavigator<PerfilStackParamList>();

const PerfilNavigator = () => {
  const isLoggedIn = useUserStore(state => !!state.user);

  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      {isLoggedIn ? (
        <Stack.Screen name="PerfilPage" component={PerfilPage} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen
          name="NotLoggedIn"
          component={PerfilNotLoggedIn}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default PerfilNavigator;
