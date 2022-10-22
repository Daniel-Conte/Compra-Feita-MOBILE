import type { InferType } from 'yup';

import type { AuthStackScreenProps } from '@navigation/types';
import cadastroSchema from './schema';

export interface CadastroProps extends AuthStackScreenProps<'Cadastro'> {}

export type CadastroFormValues = InferType<typeof cadastroSchema>;
