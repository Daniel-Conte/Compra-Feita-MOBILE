import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Caption, FAB, Headline, Portal, Text, Title } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

import { currencyMask } from '@components/Form/masks/currency';
import { phoneMask } from '@components/Form/masks/phone';
import { METODO_PAGAMENTO, STATUS_PEDIDO } from '@constants/index';
import { colorVariants } from '@config/Theme';
import usePedidoDetails from './usePedidoDetails';
import styles from './styles';
import type { PedidoDetailsProps } from './types';

const PedidoDetails = ({}: PedidoDetailsProps) => {
  const [fabOpen, setFabOpen] = useState(false);
  const _isFocused = useIsFocused();
  const { pedido, getEndereco, user, getFABActions, cancelarPedido } = usePedidoDetails();

  if (!pedido) return null;

  return (
    <ScrollView>
      <View style={styles.headlineContainer}>
        <Headline style={styles.headline}>{STATUS_PEDIDO[pedido.status]}</Headline>

        {!!pedido.justificativaCancelamento && (
          <Text style={styles.cancelReason}>Motivo: {pedido.justificativaCancelamento}</Text>
        )}
      </View>

      <View style={styles.itemList}>
        <Text style={styles.orderNumber}>Pedido N° {pedido.codigo}</Text>

        {pedido.itensPedido.map(item => (
          <View key={item.codigo} style={styles.item}>
            <View style={styles.itemPriceName}>
              <Text style={styles.itemQuantity}>{item.quantidade}x</Text>
              <Text style={styles.itemName}>{item.nomeProduto}</Text>
            </View>

            <Text style={styles.itemPrice}>
              {currencyMask(item.precoUnitario * item.quantidade)}
            </Text>
          </View>
        ))}

        <View style={styles.total}>
          <Title>Total:</Title>
          <Title>{currencyMask(pedido.valorTotal)}</Title>
        </View>
      </View>

      <View style={styles.payment}>
        <Title style={styles.paymentLabel}>Método de pagamento:</Title>

        <View style={styles.paymentMethod}>
          <Title>{METODO_PAGAMENTO[pedido.metodoPagamento]}</Title>

          {!!pedido.pagamentoDinheiro && (
            <Caption style={styles.paymentChange}>
              Troco para: {currencyMask(pedido.pagamentoDinheiro)}
            </Caption>
          )}
        </View>
      </View>

      <View style={styles.address}>
        <Title style={styles.addressLabel}>Endereço de entrega:</Title>

        <Text style={styles.addressValue}>{getEndereco()}</Text>
      </View>

      {!!user?.admin && (
        <View style={styles.customer}>
          <Title style={styles.customerLabel}>Cliente:</Title>

          <View>
            <Text style={styles.customerValue}>{pedido.pessoa.nome}</Text>
            <Text style={styles.customerValue}>{pedido.pessoa.email}</Text>
            <Text style={styles.customerValue}>{phoneMask(pedido.pessoa.telefone)}</Text>
          </View>
        </View>
      )}

      {!user?.admin && [0, 1, 4].includes(pedido.status) && (
        <Button
          mode="outlined"
          onPress={cancelarPedido}
          color={colorVariants.danger}
          style={styles.buttonCancel}>
          Cancelar pedido
        </Button>
      )}

      <Portal>
        <FAB.Group
          open={fabOpen}
          icon="th-list"
          visible={!!user?.admin && _isFocused && [0, 1, 4, 5].includes(pedido.status)}
          actions={getFABActions()}
          onStateChange={({ open }) => setFabOpen(open)}
          style={styles.fab}
        />
      </Portal>
    </ScrollView>
  );
};

export default PedidoDetails;
