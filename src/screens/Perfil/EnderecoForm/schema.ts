import * as yup from 'yup';

import { cepUnMask } from '@components/Form/masks/cep';
import cepValidate from '@components/Form/validate/cep';

const enderecoFormSchema = yup.object({
  codigo: yup.number(),
  nome: yup.string().required(),
  cidade: yup.string().required(),
  uf: yup.string().required(),
  cep: yup.string().transform(cepUnMask).concat(cepValidate).required(),
  bairro: yup.string().required(),
  rua: yup.string().required(),
  numero: yup.string().required(),
  complemento: yup.string(),
});

export default enderecoFormSchema;
