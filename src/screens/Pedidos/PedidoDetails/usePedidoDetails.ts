import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import pedidoApi from '@services/pedido';
import useUserStore from '@store/User';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';
import type { PedidosScreenNavigationProp, PedidosScreenRouteProp } from '@navigation/types';
import type { Pedido } from '@services/pedido/types';
import type { FABGroupAction } from './types';

const usePedidoDetails = () => {
  const route = useRoute<PedidosScreenRouteProp<'PedidoDetails'>>();
  const navigation = useNavigation<PedidosScreenNavigationProp>();
  const user = useUserStore(state => state.user);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const [pedido, _setPedido] = useState<Pedido | null>(null);

  useFocusEffect(
    useCallback(() => {
      _fetchPedido();
    }, []),
  );

  const _fetchPedido = async () => {
    const codigo = route.params.codigoPedido;

    try {
      const pedido = await pedidoApi.get(codigo);

      if (pedido?.data) _setPedido(pedido.data);
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    }
  };

  const _confirmarPedido = async () => {
    try {
      toggleLoading(true);
      const resp = await pedidoApi.confirmar(pedido!.codigo);

      toggleSnackbar({ title: resp.data?.message, variant: 'success' });
      _fetchPedido();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  const _iniciarPedido = async () => {
    try {
      toggleLoading(true);
      const resp = await pedidoApi.iniciar(pedido!.codigo);

      toggleSnackbar({ title: resp.data?.message, variant: 'success' });
      _fetchPedido();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  const _finalizarPedido = async () => {
    try {
      toggleLoading(true);
      const resp = await pedidoApi.finalizar(pedido!.codigo);

      toggleSnackbar({ title: resp.data?.message, variant: 'success' });
      _fetchPedido();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  const cancelarPedido = async () => {
    navigation.push('PedidoCancelarNegar', { codigoPedido: pedido!.codigo, mode: 'Cancelar' });
  };

  const _negarPedido = async () => {
    navigation.push('PedidoCancelarNegar', { codigoPedido: pedido!.codigo, mode: 'Negar' });
  };

  const getEndereco = () => {
    if (!pedido) return '';

    let endereco = `${pedido.endereco.rua}, ${pedido.endereco.numero}, ${pedido.endereco.bairro}`;

    if (pedido.endereco.complemento) endereco += `, ${pedido.endereco.complemento}`;

    return endereco;
  };

  const getFABActions = (): FABGroupAction[] => {
    const negar: FABGroupAction = { icon: 'times', onPress: _negarPedido, label: 'Negar' };
    const cancelar: FABGroupAction = { icon: 'ban', onPress: cancelarPedido, label: 'Cancelar' };
    const iniciar: FABGroupAction = { icon: 'flag', onPress: _iniciarPedido, label: 'Iniciar' };
    const confirmar: FABGroupAction = {
      icon: 'check',
      onPress: _confirmarPedido,
      label: 'Confirmar',
    };
    const finalizar: FABGroupAction = {
      icon: 'flag-checkered',
      onPress: _finalizarPedido,
      label: 'Finalizar',
    };

    const statusActions = {
      0: [negar, confirmar],
      1: [cancelar, finalizar, iniciar],
      2: [],
      3: [],
      4: [cancelar, finalizar],
      5: [],
    };

    return statusActions[pedido!.status];
  };

  return {
    pedido,
    getEndereco,
    user,
    getFABActions,
    cancelarPedido,
  };
};

export default usePedidoDetails;
