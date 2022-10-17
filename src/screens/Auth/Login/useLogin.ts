import type { LoginFormValues } from './types';

const useLogin = () => {
  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return { onSubmit };
};

export default useLogin;
