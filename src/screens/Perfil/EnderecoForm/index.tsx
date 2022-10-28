import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';

import HideKeyboardOnTouchOutside from '@components/HideKeyboardOnTouchOutside';
import Form from '@components/Form';
import Field from '@components/Field';
import Select from '@components/Select';
import { cepMask } from '@components/Form/masks/cep';
import type { SelectItem } from '@components/Select/types';
import useEnderecoForm from './useEnderecoForm';
import cadastroSchema from './schema';
import cadastroStyles from './styles';

const states: SelectItem[] = [
  { title: 'RS', value: 'RS' },
  { title: 'SC', value: 'SC' },
  { title: 'PR', value: 'PR' },
  { title: 'MS', value: 'MS' },
  { title: 'MT', value: 'MT' },
  { title: 'GO', value: 'GO' },
  { title: 'DF', value: 'DF' },
  { title: 'MG', value: 'MG' },
  { title: 'SP', value: 'SP' },
  { title: 'RJ', value: 'RJ' },
  { title: 'ES', value: 'ES' },
  { title: 'BA', value: 'BA' },
  { title: 'SE', value: 'SE' },
  { title: 'AL', value: 'AL' },
  { title: 'PE', value: 'PE' },
  { title: 'PB', value: 'PB' },
  { title: 'RN', value: 'RN' },
  { title: 'CE', value: 'CE' },
  { title: 'PI', value: 'PI' },
  { title: 'MA', value: 'MA' },
  { title: 'TO', value: 'TO' },
  { title: 'PA', value: 'PA' },
  { title: 'AP', value: 'AP' },
  { title: 'RR', value: 'RR' },
  { title: 'AM', value: 'AM' },
  { title: 'RO', value: 'RO' },
  { title: 'AC', value: 'AC' },
];

const EnderecoForm = () => {
  const { onSubmit, initialValues, mode } = useEnderecoForm();

  if (mode === 'edit' && !initialValues) return null;

  return (
    <HideKeyboardOnTouchOutside>
      <ScrollView contentContainerStyle={cadastroStyles.container}>
        <Form onSubmit={onSubmit} defaultValues={initialValues} schema={cadastroSchema}>
          {({ submitForm, setValue }) => {
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
                <Select
                  name="uf"
                  label="Estado"
                  placeholder="Selecione seu estado"
                  items={states}
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
