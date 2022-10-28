import { StyleSheet } from 'react-native';

import { width } from '@config/Layout';

const produtoItemStyles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    shadowRadius: 6,
    shadowOffset: { height: 5, width: 5 },
    width: (width - 50) / 2,
    alignItems: 'center',
  },
});

export default produtoItemStyles;
