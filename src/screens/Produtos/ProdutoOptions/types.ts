import { FontAwesome } from '@expo/vector-icons';

export interface ProdutoOptionsProps {
  visible: boolean;
  produtoOptions: ProdutoOption[];

  onDismiss: () => void;
}

export type ProdutoOption = {
  label: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  onPress: () => void;
};
