import { string } from 'yup';

import { cepUnMask } from '../masks/cep';

const cepValidate = string().test('cepValidate', 'CEP inválido', value => {
  if (!value) return true;

  return cepUnMask(value).length === 8;
});

export default cepValidate;
