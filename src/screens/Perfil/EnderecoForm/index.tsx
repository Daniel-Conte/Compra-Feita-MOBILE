import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';

import HideKeyboardOnTouchOutside from '@components/HideKeyboardOnTouchOutside';
import Form from '@components/Form';
import Field from '@components/Field';
import { cepMask } from '@components/Form/masks/cep';
import useEnderecoForm from './useEnderecoForm';
import cadastroSchema from './schema';
import cadastroStyles from './styles';

const EnderecoForm = () => {
  const { onSubmit, initialValues, mode } = useEnderecoForm();

  if (mode === 'edit' && !initialValues) return null;

  return (
    <HideKeyboardOnTouchOutside>
      <ScrollView contentContainerStyle={cadastroStyles.container}>
        <Form onSubmit={onSubmit} defaultValues={initialValues} schema={cadastroSchema}>
          {({ submitForm }) => {
            return (
              <View style={cadastroStyles.form}>
                <Field
                  name="nome"
                  label="Nome"
                  placeholder="Digite seu nome"
                  style={cadastroStyles.field}
                />
                <Field
                  name="cep"
                  label="CEP"
                  placeholder="Digite seu CEP"
                  keyboardType="number-pad"
                  mask={cepMask}
                  style={cadastroStyles.field}
                />
                <Field
                  name="cidade"
                  label="Cidade"
                  placeholder="Digite sua cidade"
                  style={cadastroStyles.field}
                />
                <Field
                  name="uf"
                  label="Estado"
                  placeholder="Selecione seu estado"
                  style={cadastroStyles.field}
                />
                <Field
                  name="bairro"
                  label="Bairro"
                  placeholder="Digite seu bairro"
                  style={cadastroStyles.field}
                />
                <Field
                  name="rua"
                  label="Rua"
                  placeholder="Digite sua rua"
                  style={cadastroStyles.field}
                />
                <Field
                  name="numero"
                  label="Número"
                  keyboardType="number-pad"
                  placeholder="Digite seu número"
                  style={cadastroStyles.field}
                />
                <Field
                  name="complemento"
                  label="Complemento"
                  placeholder="Digite seu complemento"
                  style={cadastroStyles.field}
                />

                <Button mode="contained" onPress={submitForm()} style={cadastroStyles.salvarButton}>
                  Salvar
                </Button>
              </View>
            );
          }}
        </Form>
      </ScrollView>
    </HideKeyboardOnTouchOutside>
  );
};

export default EnderecoForm;
