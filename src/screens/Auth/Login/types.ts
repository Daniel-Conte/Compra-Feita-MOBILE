import type { InferType } from 'yup';

import type { AuthStackScreenProps } from '@navigation/types';
import loginSchema from './schema';

export interface LoginProps extends AuthStackScreenProps<'Login'> {}

export type LoginFormValues = InferType<typeof loginSchema>;
