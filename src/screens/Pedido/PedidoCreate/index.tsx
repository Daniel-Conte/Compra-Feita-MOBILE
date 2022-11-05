import { FlatList, View } from 'react-native';
import { Button, Caption, Subheading, Title } from 'react-native-paper';

import Form from '@components/Form';
import Select from '@components/Select';
import Field from '@components/Field';
import { currencyFieldMask, currencyMask } from '@components/Form/masks/currency';
import usePedidoCreate from './usePedidoCreate';
import PedidoItem from './PedidoItem';
import schema from './schema';
import styles from './styles';
import type { PedidoCreateProps } from './types';

const PedidoCreate = ({}: PedidoCreateProps) => {
  const { onCreatePedido, pedidoItensList, getPrecoTotalPedido, enderecos, metodosPagamento } =
    usePedidoCreate();

  return (
    <View style={styles.container}>
      <FlatList
        data={pedidoItensList.map(item => ({ key: item.codigo, item }))}
        renderItem={({ item }) => <PedidoItem item={item.item} />}
      />

      <Form onSubmit={onCreatePedido} schema={schema}>
        {({ submitForm, watch }) => {
          return (
            <View style={styles.form}>
              <Select
                name="enderecoCodigo"
                label="Local da entrega"
                placeholder="Selecione um endereço"
                mode="flat"
                items={enderecos.map(endereco => ({
                  title: (
                    <View style={styles.address}>
                      <Subheading style={styles.addressTitle}>{endereco.nome}</Subheading>
                      <Caption style={styles.addressCaption}>
                        {endereco.rua}, {endereco.numero}, {endereco.bairro}
                      </Caption>
                    </View>
                  ),
                  value: endereco,
                }))}
                style={styles.field}
              />

              <Select
                name="metodoPagamento"
                label="Método de pagamento"
                placeholder="Selecione um método"
                items={metodosPagamento}
                style={styles.field}
              />

              {watch<any>('metodoPagamento')?.value === 2 && (
                <Field
                  name="pagamentoDinheiro"
                  label="Troco para quanto?"
                  keyboardType="number-pad"
                  mask={currencyFieldMask}
                  style={styles.field}
                />
              )}

              <Title style={styles.totalPrice}>
                Total do pedido: {currencyMask(getPrecoTotalPedido())}
              </Title>

              <Button mode="contained" onPress={submitForm()} style={styles.buttonCriarPedido}>
                Criar pedido
              </Button>
            </View>
          );
        }}
      </Form>
    </View>
  );
};

export default PedidoCreate;
