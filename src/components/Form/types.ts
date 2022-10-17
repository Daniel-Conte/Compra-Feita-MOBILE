import { ReactNode } from 'react';
import { FieldValues, UseFormHandleSubmit, UseFormProps, UseFormReturn } from 'react-hook-form';

import type { AnyObjectSchema } from 'yup';
import type Lazy from 'yup/lib/Lazy';

export interface FormProps<FormValues extends FieldValues> extends UseFormProps<FormValues> {
  validationSchema?: AnyObjectSchema | Lazy<any, unknown>;

  onSubmit: (data: FormValues) => void;
  children: (
    methods: UseFormReturn<FormValues> & {
      submitForm: () => ReturnType<UseFormHandleSubmit<FormValues>>;
    },
  ) => ReactNode;
}
