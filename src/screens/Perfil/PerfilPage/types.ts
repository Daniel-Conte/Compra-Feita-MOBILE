import type { InferType } from 'yup';

import type { PerfilStackScreenProps } from '@navigation/types';
import userEditSchema from './schema';

export interface PerfilProps extends PerfilStackScreenProps<'PerfilPage'> {}

export type UserEditFormValues = InferType<typeof userEditSchema>;
