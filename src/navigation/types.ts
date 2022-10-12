import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Root
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

// Root Tab
export type RootTabParamList = {
  Produtos: NavigatorScreenParams<ProdutosStackParamList> | undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

// Produtos
export type ProdutosStackParamList = {
  ProdutosList: undefined;
  ProdutosDetails: { nome: string };
};

export type ProdutosStackScreenProps<Screen extends keyof ProdutosStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProdutosStackParamList, Screen>,
    RootTabScreenProps<'Produtos'>
  >;
