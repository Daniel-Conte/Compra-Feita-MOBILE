import { numberMask } from '../number';
import type { Mask } from '../types';

const mask: Mask<string> = value => {
  if (!value) return value;
  let newValue: string | number = value;

  newValue = String(newValue).replace('.', ',');

  if (String(newValue).length > 6) {
    const [milhar, decimal] = String(newValue).split(',');

    const withPonctuation = numberMask(milhar);

    newValue = `${withPonctuation},${decimal}`;
  }

  return String(newValue);
};

export const decimalMask: Mask<number | undefined, string | undefined> = value => {
  if (!value) return undefined;

  return mask(value.toFixed(2));
};

export const decimalFieldMask: Mask<string | number, string> = value => {
  if (!value) return String(value);
  let newValue: string | number = String(value);

  newValue = newValue.replace(/\D/g, '');
  if (!Number(newValue)) return Number(newValue).toString();
  newValue = parseFloat(newValue) / 100;
  newValue = newValue.toFixed(2);

  return mask(newValue);
};

export const decimalUnMask: Mask<string | number, number | undefined> = value => {
  if (!value) return value == 0 ? 0 : undefined;
  let newValue = String(value);

  newValue = newValue.replace(/\./g, '');
  newValue = newValue.replace(',', '.');

  return Number(newValue);
};
