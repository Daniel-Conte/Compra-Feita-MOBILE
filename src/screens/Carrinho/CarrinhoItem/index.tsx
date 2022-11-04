import { View } from 'react-native';
import { IconButton, Surface, Text, useTheme } from 'react-native-paper';

import { currencyMask } from '@components/Form/masks/currency';
import { colorVariants } from '@config/Theme';
import useCarrinhoItem from './useCarrinhoItem';
import styles from './styles';
import type { CarrinhoItemProps } from './types';

const CarrinhoItem = ({ item, onRemoveItem }: CarrinhoItemProps) => {
  const { counter, onAddCounter, onRemoveCounter } = useCarrinhoItem(item);
  const theme = useTheme();

  return (
    <Surface style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.nomeProduto}</Text>
        <IconButton icon="trash-o" size={20} color={colorVariants.danger} onPress={onRemoveItem} />
      </View>

      <Text style={styles.price}>Total: {currencyMask(item.precoUnitario * counter)}</Text>

      <View style={styles.counterContainer}>
        <IconButton
          icon="minus"
          size={20}
          color={theme.colors.primary}
          disabled={counter === 1}
          onPress={onRemoveCounter}
        />
        <View style={styles.counter}>
          <Text style={styles.counterText}>{counter}</Text>
        </View>
        <IconButton icon="plus" size={20} color={theme.colors.primary} onPress={onAddCounter} />
      </View>
    </Surface>
  );
};

export default CarrinhoItem;
