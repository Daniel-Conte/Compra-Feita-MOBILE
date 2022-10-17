import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import HideKeyboardOnTouchOutside from '@components/HideKeyboardOnTouchOutside';
import Form from '@components/Form';
import Field from '@components/Field';
import useLogin from './useLogin';
import loginSchema from './schema';
import loginStyles from './styles';
import type { LoginProps } from './types';

const Login = ({ navigation }: LoginProps) => {
  const { onSubmit } = useLogin();

  return (
    <HideKeyboardOnTouchOutside>
      <View style={loginStyles.container}>
        <Text style={loginStyles.title}>Login</Text>

        <Form onSubmit={onSubmit} validationSchema={loginSchema}>
          {({ submitForm }) => {
            return (
              <>
                <Field
                  name="email"
                  label="Email"
                  mode="outlined"
                  keyboardType="email-address"
                  autoCapitalize="none"
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

export default Login;
