import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/Auth/Login';
import Cadastro from '@screens/Auth/Cadastro';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTransparent: true, headerTitle: '' }}
      />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
