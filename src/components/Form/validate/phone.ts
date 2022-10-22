import { string } from 'yup';

import { phoneUnMask } from '../masks/phone';

const phoneValidate = string().test('phoneValidate', 'Telefone inválido', value => {
  if (!value) return true;

  return [10, 11].includes(phoneUnMask(value).length);
});

export default phoneValidate;
