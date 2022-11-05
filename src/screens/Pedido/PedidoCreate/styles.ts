import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  form: {
    margin: 10,
  },
  field: {
    backgroundColor: '#f6f6f6',
  },
  totalPrice: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  address: {
    position: 'absolute',
    top: 20,
    left: 12,
  },
  addressTitle: {
    fontWeight: '700',
  },
  addressCaption: {
    marginTop: -5,
    marginLeft: 5,
  },
  buttonCriarPedido: {
    margin: 10,
  },
});
