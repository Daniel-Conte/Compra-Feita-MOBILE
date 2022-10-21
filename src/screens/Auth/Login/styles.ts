import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
    alignItems: 'center',
  },
  field: {
    width: '80%',
    marginVertical: 5,
  },
  button: {
    width: '80%',
    marginTop: 25,
    height: 50,
    justifyContent: 'center',
    borderRadius: 25,
  },
  footer: {
    alignItems: 'center',
  },
});

export default loginStyles;
