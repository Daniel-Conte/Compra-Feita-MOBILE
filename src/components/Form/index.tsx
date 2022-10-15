import { useForm, FormProvider, FieldValues } from 'react-hook-form';

import type { FormProps } from './types';

function Form<FormValues extends FieldValues>({
  children,
  onSubmit,
  ...useFormProps
}: FormProps<FormValues>) {
  const methods = useForm<FormValues>({
    shouldFocusError: true,
    criteriaMode: 'all',
    mode: 'onBlur',
    ...useFormProps,
  });

  const submitForm = () => methods.handleSubmit(onSubmit);

  return <FormProvider {...methods}>{children({ ...methods, submitForm })}</FormProvider>;
}

export default Form;
