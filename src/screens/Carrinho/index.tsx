import { View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';

import useCarrinho from './useCarrinho';
import CarrinhoItem from './CarrinhoItem';
import styles from './styles';
import type { CarrinhoListProps } from './types';

const CarrinhoList = ({}: CarrinhoListProps) => {
  const { carrinhoList, onRemoveItem, onCreatePedido } = useCarrinho();

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinhoList.map(item => ({ key: item.codigo, item }))}
        renderItem={({ item }) => (
          <CarrinhoItem item={item.item} onRemoveItem={() => onRemoveItem(item.item.codigo)} />
        )}
      />

      <Button mode="contained" onPress={onCreatePedido} style={styles.buttonCriarPedido}>
        Criar pedido
      </Button>
    </View>
  );
};

export default CarrinhoList;
