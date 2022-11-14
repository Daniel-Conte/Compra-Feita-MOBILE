import { useNavigation, useRoute } from '@react-navigation/native';
import type { PedidosScreenNavigationProp, PedidosScreenRouteProp } from '@navigation/types';

import useAppStore from '@store/App';
import pedidoApi from '@services/pedido';
import parseError from '@utils/parseError';
import type { PedidoCancelarNegarFormValues } from './types';

const usePedidoCancelarNegar = () => {
  const route = useRoute<PedidosScreenRouteProp<'PedidoCancelarNegar'>>();
  const navigation = useNavigation<PedidosScreenNavigationProp>();
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const toggleLoading = useAppStore(state => state.toggleLoading);

  const mode = route.params.mode;

  const onSubmit = (data: PedidoCancelarNegarFormValues) => {
    if (mode === 'Cancelar') _cancelarPedido(data.justificativa);
    else _negarPedido(data.justificativa);
  };

  const _cancelarPedido = async (justificativa: string) => {
    try {
      toggleLoading(true);
      const resp = await pedidoApi.cancelar(route.params.codigoPedido, justificativa);

      toggleSnackbar({ title: resp.data?.message, variant: 'success' });
      navigation.pop();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  const _negarPedido = async (justificativa: string) => {
    try {
      toggleLoading(true);
      const resp = await pedidoApi.negar(route.params.codigoPedido, justificativa);

      toggleSnackbar({ title: resp.data?.message, variant: 'success' });
      navigation.pop();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  return { onSubmit, mode };
};

export default usePedidoCancelarNegar;
