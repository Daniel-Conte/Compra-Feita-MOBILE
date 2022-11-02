import * as yup from 'yup';

import { currencyUnMask } from '@components/Form/masks/currency';
import { numberUnMask } from '@components/Form/masks/number';
import { decimalUnMask } from '@components/Form/masks/decimal';

const imagensObject = {
  codigo: yup.number(),
  imagem: yup.string().required(),
};

const codigoCategoriaTransform = (value: any) => value?.value?.codigo ?? undefined;

const imagensTransform = (value: any) =>
  value.map((it: any) => ({
    codigo: it.codigo,
    imagem: it.base64,
  }));

const schema = yup.object({
  codigo: yup.number(),
  nome: yup.string().required(),
  descricao: yup.string().required(),
  precoUnitario: yup.mixed<number>().transform(currencyUnMask).required(),
  estoque: yup.mixed<number>().transform(numberUnMask).required(),
  codigoCategoria: yup.mixed<number>().transform(codigoCategoriaTransform).required(),
  imagens: yup.array(yup.object(imagensObject)).transform(imagensTransform),
  altura: yup.mixed<number>().transform(decimalUnMask),
  comprimento: yup.mixed<number>().transform(decimalUnMask),
  largura: yup.mixed<number>().transform(decimalUnMask),
  marca: yup.string(),
  modelo: yup.string(),
});

export default schema;
