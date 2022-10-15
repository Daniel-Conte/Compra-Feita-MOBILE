import { ReactNode } from 'react';
import { FieldValues, UseFormHandleSubmit, UseFormProps, UseFormReturn } from 'react-hook-form';

export interface FormProps<FormValues extends FieldValues> extends UseFormProps<FormValues> {
  onSubmit: (data: FormValues) => void;
  children: (
    methods: UseFormReturn<FormValues> & {
      submitForm: () => ReturnType<UseFormHandleSubmit<FormValues>>;
    },
  ) => ReactNode;
}
