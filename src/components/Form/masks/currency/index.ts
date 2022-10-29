import type { Mask } from '../types';

const mask: Mask<string | number, string> = value => {
  if (value === null || value === undefined) return value;
  if (!value) return 'R$ 0,00';
  let newValue: string | number = String(value);

  newValue = String(newValue).replace('.', ',');

  if (newValue.length > 6) {
    const [milhar, decimal] = newValue.split(',');

    const withPonctuation = milhar
      .split('')
      .reverse()
      .map((num, index) => (index && index % 3 == 0 ? num + '.' : num))
      .reverse()
      .join('');

    newValue = `${withPonctuation},${decimal}`;
  }

  return `R$ ${newValue}`;
};

export const currencyMask: Mask<number, string> = value => mask(value.toFixed(2));

export const currencyFieldMask: Mask<string | number, string> = value => {
  let newValue: string | number = String(value);

  newValue = newValue.replace(/\D/g, '');
  newValue = parseFloat(newValue) / 100;

  return mask(newValue);
};

export const currencyUnMask: Mask<string, number> = value => {
  if (!value) return 0;
  let newValue = value;

  newValue = newValue.replace(/[R\$\.]/g, '').replace(',', '.');

  return Number(newValue);
};
