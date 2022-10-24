import { Keyboard } from 'react-native';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import setLocale from 'yup/lib/setLocale';

import customErrorMessages from './customErrorMessages';
import type { FormProps } from './types';

setLocale(customErrorMessages);

const Form = <FormValues extends FieldValues>({
  children,
  onSubmit,
  schema,
  ...useFormProps
}: FormProps<FormValues>) => {
  const methods = useForm<FormValues>({
    shouldFocusError: true,
    criteriaMode: 'all',
    mode: 'onBlur',
    resolver: schema ? yupResolver(schema) : undefined,
    ...useFormProps,
  });

  const submitForm = () =>
    methods.handleSubmit(data => {
      Keyboard.dismiss();

      onSubmit(data);
    });

  return <FormProvider {...methods}>{children({ ...methods, submitForm })}</FormProvider>;
};

export default Form;
