import type { InferType } from 'yup';

import schema from './schema';

export type ProdutoFormValues = InferType<typeof schema>;
