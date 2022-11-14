import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

import { AUTH_TOKEN_KEY } from '@constants/index';
import authApi from '@services/auth';
import useUserStore from '@store/User';
import useCarrinhoStore from '@store/Carrinho';
import type { User } from '@store/User/types';

const useFirstLoad = () => {
  const [isAppReady, _setIsAppReady] = useState(false);

  useEffect(() => {
    const firstLoad = async () => {
      try {
        const isLogged = await fetchStoredUser();

        if (isLogged) {
          const promisesWithAuth = [fetchQuantidadeCarrinho()];
          await Promise.all(promisesWithAuth);
        }
      } catch (error) {
        console.error(error);
      } finally {
        _setIsAppReady(true);
      }
    };

    firstLoad();
  }, []);

  const onLayout = useCallback(async () => {
    if (isAppReady) await SplashScreen.hideAsync();
  }, [isAppReady]);

  return { isAppReady, onLayout };
};

const fetchStoredUser = async () => {
  try {
    const token = await SecureStore.getItemAsync(AUTH_TOKEN_KEY);

    if (token) {
      const user = jwtDecode<User>(token);

      await authApi.validateToken(token);

      useUserStore.getState().setUser(user);

      return true;
    }

    return false;
  } catch (error) {
    await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
    return false;
  }
};

const fetchQuantidadeCarrinho = async () => useCarrinhoStore.getState().getQuantidade();

export default useFirstLoad;
