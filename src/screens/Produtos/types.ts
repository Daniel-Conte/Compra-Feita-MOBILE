import type { ProdutosStackScreenProps } from '@navigation/types';
import type { Produto } from '@services/produto/types';

export interface ProdutosProps extends ProdutosStackScreenProps<'ProdutosList'> {}

export interface ProdutoItemProps {
  produto: Produto;
}
