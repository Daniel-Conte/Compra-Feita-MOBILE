import { StyleSheet } from 'react-native';

const cadastroStyles = StyleSheet.create({
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default cadastroStyles;
