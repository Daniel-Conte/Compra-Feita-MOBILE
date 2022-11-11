import { ScrollView, View } from 'react-native';
import { Caption, Headline, Text, Title } from 'react-native-paper';

import { currencyMask } from '@components/Form/masks/currency';
import { phoneMask } from '@components/Form/masks/phone';
import { METODO_PAGAMENTO, STATUS_PEDIDO } from '@constants/index';
import usePedidoDetails from './usePedidoDetails';
import styles from './styles';
import type { PedidoDetailsProps } from './types';

const PedidoDetails = ({}: PedidoDetailsProps) => {
  const { pedido, getEndereco, user } = usePedidoDetails();

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
    </ScrollView>
  );
};

export default PedidoDetails;
