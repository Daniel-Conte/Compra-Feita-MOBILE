import * as yup from 'yup';

import { phoneUnMask } from '@components/Form/masks/phone';
import phoneValidate from '@components/Form/validate/phone';

const cadastroSchema = yup.object({
  nome: yup.string().required(),
  telefone: yup.string().transform(phoneUnMask).concat(phoneValidate).required(),
  email: yup.string().email().required(),
  senha: yup.string().min(8).required(),
});

export default cadastroSchema;
