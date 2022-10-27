import type { Endereco } from '@services/endereco/types';

export interface EnderecoItemProps {
  endereco: Endereco;

  onPress: () => void;
}
