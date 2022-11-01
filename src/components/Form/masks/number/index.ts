import type { Mask } from '../types';

export const numberMask: Mask<string> = value => {
  if (!value) return value;
  let newValue: string | number = numberUnMask(value)!;

  newValue = String(newValue)
    .split('')
    .reverse()
    .map((num, index) => (index && index % 3 == 0 ? num + '.' : num))
    .reverse()
    .join('');

  return newValue;
};

export const numberUnMask: Mask<string | number, number | undefined> = value => {
  if (!value) return value == 0 ? 0 : undefined;

  let newValue = String(value);

  newValue = newValue.replace(/\D/g, '');

  return Number(newValue);
};
