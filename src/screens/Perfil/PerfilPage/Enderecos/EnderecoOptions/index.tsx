import { View } from 'react-native';
import { Dialog, Portal, Text, TouchableRipple } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import enderecoOptionsStyles from './styles';
import type { EnderecoOptionsProps } from './types';

const EnderecoOptions = ({ enderecoOptions, onDismiss, visible }: EnderecoOptionsProps) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <View style={{ paddingVertical: 10 }}>
          {enderecoOptions.map(option => (
            <TouchableRipple
              key={option.label}
              onPress={option.onPress}
              style={enderecoOptionsStyles.option}>
              <>
                <FontAwesome
                  name={option.icon}
                  size={16}
                  style={enderecoOptionsStyles.optionIcon}
                />
                <Text style={enderecoOptionsStyles.optionText}>{option.label}</Text>
              </>
            </TouchableRipple>
          ))}
        </View>
      </Dialog>
    </Portal>
  );
};

export default EnderecoOptions;
