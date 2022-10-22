import { View } from 'react-native';
import { Avatar, Button, Headline, Text, TextInput } from 'react-native-paper';

import HideKeyboardOnTouchOutside from '@components/HideKeyboardOnTouchOutside';
import Form from '@components/Form';
import Field from '@components/Field';
import useLogin from './useLogin';
import loginSchema from './schema';
import loginStyles from './styles';
import type { LoginProps } from './types';

const Login = ({ navigation }: LoginProps) => {
  const { onSubmit } = useLogin(navigation.pop);

  return (
    <HideKeyboardOnTouchOutside>
      <View style={loginStyles.container}>
        <View style={loginStyles.header}>
          <Avatar.Icon icon="user" size={90} />
          <Headline>Entrar</Headline>
        </View>

        <View style={loginStyles.form}>
          <Form onSubmit={onSubmit} validationSchema={loginSchema}>
            {({ submitForm }) => {
              return (
                <>
                  <View style={loginStyles.field}>
                    <Field
                      name="email"
                      label="E-mail"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      placeholder="Digite o e-mail"
                      left={<TextInput.Icon name="envelope" color="#7c7a7a" />}
                    />
                  </View>
                  <View style={loginStyles.field}>
                    <Field
                      name="senha"
                      label="Senha"
                      secureTextEntry
                      placeholder="Digite a senha"
                      left={<TextInput.Icon name="lock" color="#7c7a7a" />}
                    />
                  </View>

                  <Button mode="contained" onPress={submitForm()} style={loginStyles.button}>
                    Entrar
                  </Button>
                </>
              );
            }}
          </Form>
        </View>

        <View style={loginStyles.footer}>
          <Text>Não possui uma conta?</Text>
          <Button onPress={() => navigation.push('Cadastro')}>Cadastre-se</Button>
        </View>
      </View>
    </HideKeyboardOnTouchOutside>
  );
};

export default Login;
