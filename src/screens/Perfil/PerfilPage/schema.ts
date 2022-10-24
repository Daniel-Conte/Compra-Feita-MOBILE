import * as yup from 'yup';

import { phoneUnMask } from '@components/Form/masks/phone';
import phoneValidate from '@components/Form/validate/phone';

const userEditSchema = yup.object({
  nome: yup.string().max(50).required(),
  telefone: yup.string().transform(phoneUnMask).concat(phoneValidate).required(),
  email: yup.string().email().max(50).required(),
});

export default userEditSchema;
