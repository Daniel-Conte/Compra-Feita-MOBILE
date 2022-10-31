import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

import { width } from '@config/Layout';

const produtoDetailsStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  subtitle: {
    marginBottom: -6,
  },
  imageList: {
    marginVertical: 20,
  },
  imageContainer: {
    width: width - 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  price: {
    fontSize: 30,
  },
  withStock: {
    color: Colors.green700,
    marginRight: 5,
  },
  withStockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noStock: {
    color: Colors.red700,
  },
  buttonBuyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuQtd: {
    maxHeight: 300,
  },
  buttonBuy: {
    marginVertical: 20,
    marginLeft: 10,
    flex: 1,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  description: {
    marginLeft: 10,
  },
  infoContainer: {
    marginBottom: 20,
  },
  info: {
    marginLeft: 10,
  },
});

export default produtoDetailsStyles;
