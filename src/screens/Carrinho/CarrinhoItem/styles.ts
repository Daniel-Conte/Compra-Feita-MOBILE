import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 2,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 17,
  },
  price: {
    alignSelf: 'flex-end',
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 3,
  },
  counterContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  counter: {
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 17,
  },
});
