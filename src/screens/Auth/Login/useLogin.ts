import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

import authApi from '@services/auth';
import usuariosApi from '@services/usuarios';
import { AUTH_TOKEN_KEY } from '@constants/index';
import useAppStore from '@store/App';
import useUserStore from '@store/User';
import useCarrinhoStore from '@store/Carrinho';
import type { User } from '@store/User/types';
import parseError from '@utils/parseError';
import type { LoginFormValues } from './types';
import registerForPushNotifications from '@utils/registerForPushNotifications';

const useLogin = (goBack: () => void) => {
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const setUser = useUserStore(state => state.setUser);
  const getQuantidadeCarrinho = useCarrinhoStore(state => state.getQuantidade);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      toggleLoading(true);
      const resp = await authApi.login(data);

      if (!resp?.data) throw new Error('Ocorreu um erro no login');

      const user = jwtDecode<User>(resp.data);
      setUser(user);
      await SecureStore.setItemAsync(AUTH_TOKEN_KEY, resp.data);
      await savePushToken();
      await getQuantidadeCarrinho();

      goBack();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  const savePushToken = async () => {
    const user = useUserStore.getState().user;

    try {
      const token = await registerForPushNotifications();

      if ((token || null) !== user?.pushToken) await usuariosApi.updatePushToken(token);
    } catch (error) {}
  };

  return { onSubmit };
};

export default useLogin;
