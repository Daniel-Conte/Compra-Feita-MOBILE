import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import type {
  BottomTabBarButtonProps,
  LabelPosition,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import ProdutosNavigator from './ProdutosNavigator';
import PedidosNavigator from './PedidosNavigator';
import CarrinhoNavigator from './CarrinhoNavigator';
import PerfilNavigator from './PerfilNavigator';
import TabBar from '@components/TabBar';
import type { RootTabParamList, RootTabScreenProps } from '../types';
import useUserStore from '@store/User';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const isloggedIn = useUserStore(state => !!state.user);

  return (
    <BottomTab.Navigator initialRouteName="Produtos">
      <BottomTab.Screen
        name="Produtos"
        component={ProdutosNavigator}
        options={({ navigation }: RootTabScreenProps<'Produtos'>) => ({
          tabBarLabel: getTabBarLabel('Produtos'),
          tabBarIcon: getTabBarIcon('cubes'),
          tabBarButton: getTabBarButton,
          headerRight: getLoginButton(isloggedIn, () =>
            navigation.push('Auth', { screen: 'Login' }),
          ),
        })}
      />

      <BottomTab.Screen
        name="Pedidos"
        component={PedidosNavigator}
        options={{
          tabBarLabel: getTabBarLabel('Pedidos'),
          tabBarIcon: getTabBarIcon('list-alt'),
          tabBarButton: getTabBarButton,
        }}
      />

      <BottomTab.Screen
        name="Carrinho"
        component={CarrinhoNavigator}
        options={{
          tabBarLabel: getTabBarLabel('Carrinho'),
          tabBarIcon: getTabBarIcon('shopping-cart'),
          tabBarButton: getTabBarButton,
        }}
      />

      <BottomTab.Screen
        name="Perfil"
        component={PerfilNavigator}
        options={{
          tabBarLabel: getTabBarLabel('Perfil'),
          tabBarIcon: getTabBarIcon('user'),
          tabBarButton: getTabBarButton,
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

const getLoginButton = (isLoggedIn: boolean, onPress: () => void) => {
  if (isLoggedIn) return;

  return () => (
    <Button mode="contained" onPress={onPress} style={{ marginRight: 10 }} icon="sign-in">
      Entrar
    </Button>
  );
};

const getTabBarLabel = (label: string) => {
  type TabBarLabelParams = { focused: boolean; color: string; position: LabelPosition };

  return ({ color, focused }: TabBarLabelParams) => (
    <TabBar.Label text={label} color={color} focused={focused} />
  );
};

const getTabBarIcon = (icon: React.ComponentProps<typeof FontAwesome>['name']) => {
  type TabBarIconParams = { focused: boolean; color: string; size: number };

  return ({ color, focused }: TabBarIconParams) => (
    <TabBar.Icon name={icon} color={color} focused={focused} />
  );
};

const getTabBarButton = (props: BottomTabBarButtonProps) => <TabBar.Button {...props} />;

export default BottomTabNavigator;
