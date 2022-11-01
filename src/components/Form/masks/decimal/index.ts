import { numberMask } from '../number';
import type { Mask } from '../types';

export const decimalMask: Mask<string> = value => {
  let newValue: string | number = String(value).replace(/\D/g, '');
  if (!newValue) return newValue;

  newValue = parseFloat(newValue) / 100;
  newValue = String(newValue).replace('.', ',');

  if (String(newValue).length > 6) {
    const [milhar, decimal] = String(newValue).split(',');

    const withPonctuation = numberMask(milhar);

    newValue = `${withPonctuation},${decimal}`;
  }

  return String(newValue);
};

export const decimalUnMask: Mask<string | number, number | undefined> = value => {
  if (!value) return value == 0 ? 0 : undefined;
  let newValue = String(value);

  newValue = newValue.replace(/\./g, '');
  newValue = newValue.replace(',', '.');

  return Number(newValue);
};
