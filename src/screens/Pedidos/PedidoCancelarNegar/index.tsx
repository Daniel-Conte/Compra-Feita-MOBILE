import { View } from 'react-native';
import { Button } from 'react-native-paper';

import HideKeyboardOnTouchOutside from '@components/HideKeyboardOnTouchOutside';
import Form from '@components/Form';
import Field from '@components/Field';
import usePedidoCancelarNegar from './usePedidoCancelarNegar';
import schema from './schema';
import styles from './styles';
import type { PedidoCancelarNegarProps } from './types';

const PedidoCancelarNegar = ({}: PedidoCancelarNegarProps) => {
  const { onSubmit, mode } = usePedidoCancelarNegar();

  return (
    <HideKeyboardOnTouchOutside>
      <View style={styles.container}>
        <Form onSubmit={onSubmit} schema={schema}>
          {({ submitForm }) => (
            <View style={styles.form}>
              <Field name="justificativa" label="Informe uma justificativa" style={styles.field} />

              <Button mode="contained" onPress={submitForm()} style={styles.button}>
                {mode} pedido
              </Button>
            </View>
          )}
        </Form>
      </View>
    </HideKeyboardOnTouchOutside>
  );
};

export default PedidoCancelarNegar;
