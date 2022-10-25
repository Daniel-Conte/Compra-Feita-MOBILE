import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';

import usePerfil from './usePerfil';
import Form from '@components/Form';
import Field from '@components/Field';
import { phoneMask } from '@components/Form/masks/phone';
import { colorVariants } from '@config/Theme';
import perfilStyles from './styles';
import userEditSchema from './schema';
import type { PerfilProps } from './types';

const PerfilPage = ({}: PerfilProps) => {
  const { onSubmit, initialValues, onLogout } = usePerfil();

  return (
    <View style={perfilStyles.container}>
      <View>
        <Title>Informações básicas</Title>

        <Form onSubmit={onSubmit} defaultValues={initialValues} schema={userEditSchema}>
          {({ submitForm }) => (
            <>
              <Field
                name="nome"
                label="Nome"
                placeholder="Digite seu nome"
                style={perfilStyles.field}
              />

              <Field
                name="telefone"
                label="Telefone"
                keyboardType="phone-pad"
                mask={phoneMask}
                placeholder="Digite seu telefone"
                style={perfilStyles.field}
              />

              <Field
                name="email"
                label="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                style={perfilStyles.field}
              />

              <Button mode="contained" onPress={submitForm()} style={perfilStyles.buttonSubmit}>
                Salvar
              </Button>
            </>
          )}
        </Form>
      </View>

      <Button mode="outlined" onPress={onLogout} color={colorVariants.danger}>
        Sair da conta
      </Button>
    </View>
  );
};

export default PerfilPage;
