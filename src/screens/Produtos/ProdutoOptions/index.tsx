import { View } from 'react-native';
import { Dialog, Portal, Text, TouchableRipple } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';
import type { ProdutoOptionsProps } from './types';

const ProdutoOptions = ({ produtoOptions, onDismiss, visible }: ProdutoOptionsProps) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <View style={{ paddingVertical: 10 }}>
          {produtoOptions.map(option => (
            <TouchableRipple key={option.label} onPress={option.onPress} style={styles.option}>
              <>
                <FontAwesome name={option.icon} size={16} style={styles.optionIcon} />
                <Text style={styles.optionText}>{option.label}</Text>
              </>
            </TouchableRipple>
          ))}
        </View>
      </Dialog>
    </Portal>
  );
};

export default ProdutoOptions;
