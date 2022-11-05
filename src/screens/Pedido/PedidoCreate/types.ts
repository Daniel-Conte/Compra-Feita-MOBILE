import type { InferType } from 'yup';

import type { PedidoStackScreenProps } from '@navigation/types';
import schema from './schema';

export interface PedidoCreateProps extends PedidoStackScreenProps<'PedidoCreate'> {}

export type PedidoCreateFormValues = InferType<typeof schema>;
