import type { CarrinhoListItem } from '@services/carrinho/types';

export interface CarrinhoItemProps {
  item: CarrinhoListItem;

  onRemoveItem: () => void;
}
