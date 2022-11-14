import type { PedidosStackScreenProps } from '@navigation/types';
import type { FABGroupProps } from 'react-native-paper';

export interface PedidoDetailsProps extends PedidosStackScreenProps<'PedidoDetails'> {}

export type FABGroupAction = FABGroupProps['actions'][0];
