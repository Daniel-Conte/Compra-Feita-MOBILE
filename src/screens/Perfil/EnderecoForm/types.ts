import type { InferType } from 'yup';

import enderecoFormSchema from './schema';

export type EnderecoFormValues = InferType<typeof enderecoFormSchema>;
