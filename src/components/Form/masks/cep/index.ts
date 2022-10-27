import type { Mask } from '../types';

export const cepMask: Mask<string> = value => {
  if (!value) return value;
  let newValue = value;

  newValue = newValue.replace(/\D/g, '');

  if (newValue.length > 8) newValue = newValue.substring(0, 8);

  newValue = newValue.replace(/(\d{5})(\d)/, '$1-$2');

  return newValue;
};

export const cepUnMask: Mask<string> = value => {
  if (!value) return value;

  return value.replace(/\D/g, '');
};
