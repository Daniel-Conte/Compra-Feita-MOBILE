import * as SecureStore from 'expo-secure-store';

import authApi from '@services/auth';
import { AUTH_TOKEN_KEY } from '@config/Constants';
import type { LoginFormValues } from './types';

const useLogin = (goBack: () => void) => {
  const onSubmit = async (data: LoginFormValues) => {
    try {
      const resp = await authApi.login(data);

      if (!resp?.data) throw new Error('Ocorreu um erro no login');

      await SecureStore.setItemAsync(AUTH_TOKEN_KEY, resp.data);

      goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return { onSubmit };
};

export default useLogin;
