import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useUserStore from '@store/User';
import PerfilPage from '@screens/Perfil/PerfilPage';
import EnderecoForm from '@screens/Perfil/EnderecoForm';
import PerfilNotLoggedIn from '@screens/Perfil/NotLoggedIn';
import globalStyles from '../globalStyles';
import type { PerfilStackParamList } from '../types';

const Stack = createNativeStackNavigator<PerfilStackParamList>();

const PerfilNavigator = () => {
  const isLoggedIn = useUserStore(state => !!state.user);

  return (
    <Stack.Navigator screenOptions={{ contentStyle: globalStyles.container }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="PerfilPage" component={PerfilPage} options={{ title: 'Perfil' }} />
          <Stack.Screen
            name="EnderecoForm"
            component={EnderecoForm}
            options={({ route }) => ({
              title: route.params.mode === 'new' ? 'Novo Endereço' : 'Editar Endereço',
            })}
          />
        </>
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
