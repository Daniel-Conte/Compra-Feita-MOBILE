import { Image, TouchableOpacity } from 'react-native';
import { Surface, Text } from 'react-native-paper';

import { currencyMask } from '@components/Form/masks/currency';
import produtoItemStyles from './styles';
import type { ProdutoItemProps } from '../types';

const ProdutoItem = ({ produto }: ProdutoItemProps) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Surface style={produtoItemStyles.container}>
        <Image source={{ uri: produto.imagem }} style={produtoItemStyles.image}></Image>
        <Text style={produtoItemStyles.title}>{produto.nome}</Text>
        <Text style={produtoItemStyles.price}>{currencyMask(produto.precoUnitario)}</Text>
      </Surface>
    </TouchableOpacity>
  );
};

export default ProdutoItem;
