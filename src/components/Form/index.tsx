import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import setLocale from 'yup/lib/setLocale';

import customErrorMessages from './customErrorMessages';
import type { FormProps } from './types';

setLocale(customErrorMessages);

function Form<FormValues extends FieldValues>({
  children,
  onSubmit,
  validationSchema,
  ...useFormProps
}: FormProps<FormValues>) {
  const methods = useForm<FormValues>({
    shouldFocusError: true,
    criteriaMode: 'all',
    mode: 'onBlur',
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    ...useFormProps,
  });

  const submitForm = () => methods.handleSubmit(onSubmit);

  return <FormProvider {...methods}>{children({ ...methods, submitForm })}</FormProvider>;
}

export default Form;
