import type { InferType } from 'yup';
import type { PedidosStackScreenProps } from '@navigation/types';
import schema from './schema';

export interface PedidoCancelarNegarProps extends PedidosStackScreenProps<'PedidoCancelarNegar'> {}

export type PedidoCancelarNegarFormValues = InferType<typeof schema>;
