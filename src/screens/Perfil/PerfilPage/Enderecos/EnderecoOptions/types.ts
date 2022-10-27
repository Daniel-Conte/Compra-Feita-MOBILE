import { FontAwesome } from '@expo/vector-icons';

export interface EnderecoOptionsProps {
  visible: boolean;
  enderecoOptions: EnderecoOption[];

  onDismiss: () => void;
}

export type EnderecoOption = {
  label: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  onPress: () => void;
};
