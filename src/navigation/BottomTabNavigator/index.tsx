import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import type {
  BottomTabBarButtonProps,
  LabelPosition,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import useCarrinhoStore from '@store/Carrinho';
import ProdutosNavigator from './ProdutosNavigator';
import PedidosNavigator from './PedidosNavigator';
import CarrinhoNavigator from './CarrinhoNavigator';
import PerfilNavigator from './PerfilNavigator';
import TabBar from '@components/TabBar';
import type { RootTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const quantidadeCarrinho = useCarrinhoStore(state => state.quantidade);

  return (
    <BottomTab.Navigator initialRouteName="Produtos">
      <BottomTab.Screen
        name="Produtos"
        component={ProdutosNavigator}
        options={{
          tabBarLabel: getTabBarLabel('Produtos'),
          tabBarIcon: getTabBarIcon('cubes'),
          tabBarButton: getTabBarButton,
          headerShown: false,
        }}
      />

      <BottomTab.Screen
        name="Pedidos"
        component={PedidosNavigator}
        options={{
          tabBarLabel: getTabBarLabel('Pedidos'),
          tabBarIcon: getTabBarIcon('list-alt'),
          tabBarButton: getTabBarButton,
          headerShown: false,
        }}
      />

      <BottomTab.Screen
        name="Carrinho"
        component={CarrinhoNavigator}
        options={{
          title: 'Carrinho de compras',
          tabBarLabel: getTabBarLabel('Carrinho'),
          tabBarIcon: getTabBarIcon('shopping-cart'),
          tabBarButton: getTabBarButton,
          tabBarBadge: quantidadeCarrinho || undefined,
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
