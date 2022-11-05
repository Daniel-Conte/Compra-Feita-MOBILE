import * as yup from 'yup';

import { currencyUnMask } from '@components/Form/masks/currency';

const enderecoCodigoTransform = (value: any) => value?.value?.codigo;
const metodoPagamentoTransform = (value: any) => value?.value;

export default yup.object({
  enderecoCodigo: yup.mixed<number>().transform(enderecoCodigoTransform).required(),
  metodoPagamento: yup.mixed<number>().transform(metodoPagamentoTransform).required(),
  pagamentoDinheiro: yup.mixed<number>().transform(currencyUnMask),
});
