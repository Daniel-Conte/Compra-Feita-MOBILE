import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headlineContainer: {
    marginVertical: 30,
  },
  headline: {
    alignSelf: 'center',
  },
  cancelReason: {
    alignSelf: 'center',
  },
  itemList: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  orderNumber: {
    fontSize: 17,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  itemPriceName: {
    flexDirection: 'row',
  },
  itemQuantity: {
    fontSize: 17,
    marginRight: 10,
  },
  itemName: {
    fontSize: 17,
  },
  itemPrice: {
    fontSize: 17,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  paymentLabel: {
    fontSize: 17,
  },
  paymentMethod: {
    alignItems: 'center',
  },
  paymentChange: {
    marginTop: -8,
  },
  address: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addressLabel: {
    fontSize: 17,
  },
  addressValue: {
    fontSize: 17,
  },
  customer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  customerLabel: {
    fontSize: 17,
  },
  customerValue: {
    alignSelf: 'flex-end',
    fontSize: 17,
  },
});
