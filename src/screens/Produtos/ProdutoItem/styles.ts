import { StyleSheet } from 'react-native';

import { width } from '@config/Layout';

const produtoItemStyles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 5,
    borderRadius: 8,
    elevation: 2,
    shadowRadius: 6,
    shadowOffset: { height: 5, width: 5 },
    width: (width - 20) / 2,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    padding: 5,
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 19,
    padding: 5,
    paddingTop: 0,
    alignSelf: 'flex-start',
  },
});

export default produtoItemStyles;
