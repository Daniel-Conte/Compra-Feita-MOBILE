import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Root
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Auth: NavigatorScreenParams<AuthStackParamList> | undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

// Root Tab
export type RootTabParamList = {
  Produtos: NavigatorScreenParams<ProdutosStackParamList> | undefined;
  Pedidos: NavigatorScreenParams<PedidosStackParamList> | undefined;
  Carrinho: NavigatorScreenParams<CarrinhoStackParamList> | undefined;
  Perfil: NavigatorScreenParams<PerfilStackParamList> | undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootTabScreenNavigationProps<Screen extends keyof RootTabParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<RootStackParamList>,
    BottomTabNavigationProp<RootTabParamList, Screen>
  >;

// Auth
export type AuthStackParamList = {
  Login: undefined;
  Cadastro: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>;

// Produtos
export type ProdutosStackParamList = {
  ProdutosList: undefined;
  ProdutoDetails: { codigoProduto: number };
  ProdutoForm: { mode: 'new' };
};

export type ProdutosStackScreenProps<Screen extends keyof ProdutosStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProdutosStackParamList, Screen>,
    RootTabScreenProps<'Produtos'>
  >;

export type ProdutosScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<ProdutosStackParamList>,
  RootTabScreenNavigationProps<'Produtos'>
>;

export type ProdutosScreenRouteProp<Screen extends keyof ProdutosStackParamList> =
  ProdutosStackScreenProps<Screen>['route'];

// Pedidos
export type PedidosStackParamList = {
  PedidosList: undefined;
  PedidoCreate: { idProdutos: number[] };
  NotLoggedIn: undefined;
};

export type PedidosStackScreenProps<Screen extends keyof PedidosStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<PedidosStackParamList, Screen>,
    RootTabScreenProps<'Pedidos'>
  >;

// Carrinho de compras
export type CarrinhoStackParamList = {
  CarrinhoList: undefined;
  NotLoggedIn: undefined;
};

export type CarrinhoStackScreenProps<Screen extends keyof CarrinhoStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CarrinhoStackParamList, Screen>,
    RootTabScreenProps<'Carrinho'>
  >;

// Perfil
export type PerfilStackParamList = {
  PerfilPage: undefined;
  EnderecoForm: { mode: 'new' } | { mode: 'edit'; codigoEndereco: number };
  NotLoggedIn: undefined;
};

export type PerfilStackScreenProps<Screen extends keyof PerfilStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<PerfilStackParamList, Screen>,
    RootTabScreenProps<'Perfil'>
  >;

export type PerfilScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<PerfilStackParamList>,
  RootTabScreenNavigationProps<'Perfil'>
>;

export type PerfilScreenRouteProp = PerfilStackScreenProps<'EnderecoForm'>['route'];
