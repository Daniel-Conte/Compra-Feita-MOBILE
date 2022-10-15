import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomTabBarButtonProps,
  LabelPosition,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import { FontAwesome } from '@expo/vector-icons';

import ProdutosNavigator from './ProdutosNavigator';
import PedidosNavigator from './PedidosNavigator';
import CarrinhoNavigator from './CarrinhoNavigator';
import PerfilNavigator from './PerfilNavigator';
import TabBar from '@components/TabBar';
import { RootTabParamList, RootTabScreenProps } from '../types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Produtos">
      <BottomTab.Screen
        name="Produtos"
        component={ProdutosNavigator}
        options={({ navigation }: RootTabScreenProps<'Produtos'>) => ({
          tabBarLabel: getTabBarLabel('Produtos'),
          tabBarIcon: getTabBarIcon('cubes'),
          tabBarButton: getTabBarButton,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('NotFound')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome name="info-circle" size={25} style={{ marginRight: 15 }} />
            </Pressable>
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
        }}
      />
    </BottomTab.Navigator>
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
