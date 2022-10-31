import type { ProdutosStackScreenProps } from '@navigation/types';

export interface ProdutoDetailsProps extends ProdutosStackScreenProps<'ProdutoDetails'> {}

export type MenuQtd = {
  visible: boolean;
  qtd: number;
};
