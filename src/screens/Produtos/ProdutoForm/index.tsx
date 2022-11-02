import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';

import HideKeyboardOnTouchOutside from '@components/HideKeyboardOnTouchOutside';
import Form from '@components/Form';
import Field from '@components/Field';
import Select from '@components/Select';
import ImagePicker from '@components/ImagePicker';
import { currencyFieldMask } from '@components/Form/masks/currency';
import { numberMask } from '@components/Form/masks/number';
import { decimalMask } from '@components/Form/masks/decimal';
import useProdutoForm from './useProdutoForm';
import schema from './schema';
import styles from './styles';

const ProdutoForm = () => {
  const { onSubmit, initialValues, mode, categoriasList } = useProdutoForm();

  //if (mode === 'edit' && !initialValues) return null;

  return (
    <HideKeyboardOnTouchOutside>
      <ScrollView contentContainerStyle={styles.container}>
        <Form onSubmit={onSubmit} defaultValues={initialValues} schema={schema}>
          {({ submitForm }) => {
            return (
              <View style={styles.form}>
                <ImagePicker
                  name="imagens"
                  buttonText="Selecione as imagens"
                  imageLimit={5}
                  imagePickerOptions={{ allowsMultipleSelection: true }}
                  resize={{ height: 300 }}
                />

                <Field name="nome" label="Nome" placeholder="Digite o nome" style={styles.field} />
                <Field
                  name="descricao"
                  label="Descrição"
                  placeholder="Digite a descrição"
                  style={styles.field}
                />
                <View style={styles.row}>
                  <View style={{ width: '45%' }}>
                    <Field
                      name="precoUnitario"
                      label="Preço"
                      placeholder="Digite o preço"
                      keyboardType="number-pad"
                      mask={currencyFieldMask}
                      style={styles.field}
                    />
                  </View>
                  <View style={{ width: '45%' }}>
                    <Field
                      name="estoque"
                      label="Estoque"
                      placeholder="Digite o estoque"
                      keyboardType="number-pad"
                      mask={numberMask}
                      style={styles.field}
                    />
                  </View>
                </View>
                <Select
                  name="codigoCategoria"
                  label="Categoria"
                  placeholder="Selecione a categoria"
                  items={categoriasList.map(categoria => ({
                    title: categoria.nome,
                    value: categoria,
                  }))}
                  style={styles.field}
                />
                <View style={styles.row}>
                  <View style={{ width: '45%' }}>
                    <Field
                      name="altura"
                      label="Altura"
                      placeholder="Digite a altura"
                      keyboardType="number-pad"
                      mask={decimalMask}
                      style={styles.field}
                    />
                  </View>
                  <View style={{ width: '45%' }}>
                    <Field
                      name="largura"
                      label="Largura"
                      placeholder="Digite a largura"
                      keyboardType="number-pad"
                      mask={decimalMask}
                      style={styles.field}
                    />
                  </View>
                </View>
                <Field
                  name="comprimento"
                  label="Comprimento"
                  placeholder="Digite o comprimento"
                  keyboardType="number-pad"
                  mask={decimalMask}
                  style={styles.field}
                />

                <View style={styles.row}>
                  <View style={{ width: '45%' }}>
                    <Field
                      name="marca"
                      label="Marca"
                      placeholder="Digite a marca"
                      style={styles.field}
                    />
                  </View>
                  <View style={{ width: '45%' }}>
                    <Field
                      name="modelo"
                      label="Modelo"
                      placeholder="Digite o modelo"
                      style={styles.field}
                    />
                  </View>
                </View>

                <Button mode="contained" onPress={submitForm()} style={styles.salvarButton}>
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

export default ProdutoForm;
