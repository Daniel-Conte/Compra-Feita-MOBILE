import { View } from 'react-native';
import { Avatar, Button, Headline, Text, TextInput } from 'react-native-paper';

import HideKeyboardOnTouchOutside from '@components/HideKeyboardOnTouchOutside';
import Form from '@components/Form';
import Field from '@components/Field';
import { phoneMask } from '@components/Form/masks/phone';
import useCadastro from './useCadastro';
import cadastroSchema from './schema';
import cadastroStyles from './styles';
import type { CadastroProps } from './types';

const Cadastro = ({ navigation }: CadastroProps) => {
  const { onSubmit } = useCadastro(navigation.pop);

  return (
    <HideKeyboardOnTouchOutside>
      <View style={cadastroStyles.container}>
        <View style={cadastroStyles.header}>
          <Avatar.Icon icon="user-plus" size={90} />
          <Headline>Cadastro</Headline>
        </View>

        <View style={cadastroStyles.form}>
          <Form onSubmit={onSubmit} validationSchema={cadastroSchema}>
            {({ submitForm }) => {
              return (
                <>
                  <View style={cadastroStyles.field}>
                    <Field
                      name="nome"
                      label="Nome"
                      placeholder="Digite seu nome"
                      left={<TextInput.Icon name="user" color="#7c7a7a" />}
                    />
                  </View>
                  <View style={cadastroStyles.field}>
                    <Field
                      name="telefone"
                      label="Telefone"
                      keyboardType="phone-pad"
                      mask={phoneMask}
                      placeholder="Digite seu telefone"
                      left={<TextInput.Icon name="phone" color="#7c7a7a" />}
                    />
                  </View>
                  <View style={cadastroStyles.field}>
                    <Field
                      name="email"
                      label="E-mail"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      placeholder="Digite seu e-mail"
                      left={<TextInput.Icon name="envelope" color="#7c7a7a" />}
                    />
                  </View>
                  <View style={cadastroStyles.field}>
                    <Field
                      name="senha"
                      label="Senha"
                      secureTextEntry
                      placeholder="Digite sua senha"
                      left={<TextInput.Icon name="lock" color="#7c7a7a" />}
                    />
                  </View>

                  <Button mode="contained" onPress={submitForm()} style={cadastroStyles.button}>
                    Cadastrar
                  </Button>
                </>
              );
            }}
          </Form>
        </View>

        <View style={cadastroStyles.footer}>
          <Text>Já possui uma conta?</Text>
          <Button onPress={() => navigation.pop()}>Entre</Button>
        </View>
      </View>
    </HideKeyboardOnTouchOutside>
  );
};

export default Cadastro;
