import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import HideKeyboardOnTouchOutside from '@components/HideKeyboardOnTouchOutside';
import Form from '@components/Form';
import Field from '@components/Field';
import { required } from '@components/Form/rules';
import type { AuthStackScreenProps } from '@navigation/types';

type LoginFormValues = {
  email: string;
  senha: string;
};

const Login = ({ navigation }: AuthStackScreenProps<'Login'>) => {
  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <HideKeyboardOnTouchOutside>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <Form onSubmit={onSubmit}>
          {({ submitForm }) => {
            return (
              <>
                <Field
                  name="email"
                  label="Email"
                  mode="outlined"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  rules={{ required }}
                />
                <Field name="senha" label="Senha" mode="outlined" secureTextEntry />

                <Button mode="outlined" onPress={submitForm()}>
                  Submit
                </Button>
              </>
            );
          }}
        </Form>

        <Button mode="contained" onPress={() => navigation.push('Cadastro')} icon="camera">
          Cadastrar-se
        </Button>
      </View>
    </HideKeyboardOnTouchOutside>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
