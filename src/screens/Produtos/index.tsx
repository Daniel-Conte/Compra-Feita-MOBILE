import { ScrollView, View } from 'react-native';

import useProdutos from './useProdutos';
import ProdutoItem from './ProdutoItem';
import produtosStyles from './styles';
import type { ProdutosProps } from './types';

const Produtos = ({ navigation }: ProdutosProps) => {
  const { produtosList } = useProdutos();

  return (
    <ScrollView>
      <View style={produtosStyles.container}>
        {produtosList.map(produto => (
          <ProdutoItem key={produto.nome} produto={produto} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Produtos;
