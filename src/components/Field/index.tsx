import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

import ErrorMessage from './ErrorMessage';
import type { FieldProps } from './types';

const Field = ({
  name,
  defaultValue,
  rules,
  shouldUnregister,
  mask,
  ...textInputProps
}: FieldProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onBlur, onChange, ref, value }, fieldState: { error } }) => (
        <>
          <TextInput
            {...textInputProps}
            onBlur={onBlur}
            onChangeText={value => onChange(mask ? mask(value) : value)}
            value={value}
            ref={ref}
            error={!!error}
          />
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </>
      )}
    />
  );
};

export default Field;
