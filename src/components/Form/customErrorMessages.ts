import type { LocaleObject } from 'yup/lib/locale';

const customErrorMessages: LocaleObject = {
  mixed: {
    default: 'Inválido',
    required: 'Obrigatório',
  },
  string: {
    email: 'E-mail inválido',
    min: 'Deve ter no mínimo 8 caracteres',
  },
};

export default customErrorMessages;
