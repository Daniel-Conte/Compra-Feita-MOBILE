import * as SecureStore from 'expo-secure-store';

import authApi from '@services/auth';
import { AUTH_TOKEN_KEY } from '@config/Constants';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';
import type { LoginFormValues } from './types';

const useLogin = (goBack: () => void) => {
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      toggleLoading(true);
      const resp = await authApi.login(data);

      if (!resp?.data) throw new Error('Ocorreu um erro no login');

      await SecureStore.setItemAsync(AUTH_TOKEN_KEY, resp.data);

      goBack();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  return { onSubmit };
};

export default useLogin;
