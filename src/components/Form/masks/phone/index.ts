import type { Mask } from '../types';

export const phoneMask: Mask<string> = value => {
  if (!value) return value;
  let newValue = value;

  newValue = newValue.replace(/\D/g, '');
  const valueLength = newValue.length;

  if (valueLength > 11) newValue = newValue.substring(0, 11);

  newValue = newValue.replace(/^(\d{2})(\d)/g, '($1) $2');

  if (valueLength < 11) {
    newValue = newValue.replace(/(\d{4})(\d)/, '$1-$2');
  } else {
    newValue = newValue.replace(/(\d{5})(\d)/, '$1-$2');
  }

  return newValue;
};

export const phoneUnMask: Mask<string> = value => {
  if (!value) return value;

  return value.replace(/\D/g, '');
};
