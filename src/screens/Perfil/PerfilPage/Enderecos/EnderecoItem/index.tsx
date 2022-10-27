import { Text, TouchableRipple } from 'react-native-paper';

import enderecoItemStyles from './styles';
import type { EnderecoItemProps } from './types';

const EnderecoItem = ({ endereco, onPress }: EnderecoItemProps) => {
  return (
    <TouchableRipple onPress={onPress} style={enderecoItemStyles.container}>
      <>
        <Text style={enderecoItemStyles.title}>{endereco.nome}</Text>
        <Text>
          {endereco.rua}, {endereco.numero}, {endereco.bairro}
        </Text>
      </>
    </TouchableRipple>
  );
};

export default EnderecoItem;
