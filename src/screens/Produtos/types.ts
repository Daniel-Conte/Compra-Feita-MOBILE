import type { ProdutosStackScreenProps } from '@navigation/types';
import type { ProdutoListItem } from '@services/produto/types';

export interface ProdutosProps extends ProdutosStackScreenProps<'ProdutosList'> {}

export interface ProdutoItemProps {
  produto: ProdutoListItem;
  onPress: () => void;
  onLongPress: () => void;
}
