import { ScrollView, View } from 'react-native';

import useProdutos from './useProdutos';
import ProdutoItem from './ProdutoItem';
import ProdutoOptions from './ProdutoOptions';
import produtosStyles from './styles';
import type { ProdutosProps } from './types';

const Produtos = ({}: ProdutosProps) => {
  const {
    produtosList,
    onPressItem,
    produtoOptions,
    onDismissDialog,
    onLongPressItem,
    produtoSelecionado,
  } = useProdutos();

  return (
    <ScrollView>
      <View style={produtosStyles.container}>
        {produtosList.map(produto => (
          <ProdutoItem
            key={produto.nome}
            produto={produto}
            onPress={() => onPressItem(produto)}
            onLongPress={() => onLongPressItem(produto)}
          />
        ))}
      </View>

      <ProdutoOptions
        visible={!!produtoSelecionado}
        produtoOptions={produtoOptions}
        onDismiss={onDismissDialog}
      />
    </ScrollView>
  );
};

export default Produtos;
