import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

import { AUTH_TOKEN_KEY } from '@config/Constants';
import useUserStore from '@store/User';
import type { User } from '@store/User/types';

const useFirstLoad = () => {
  const [isAppReady, _setIsAppReady] = useState(false);

  useEffect(() => {
    const firstLoad = async () => {
      try {
        const promises = [fetchStoredUser()];

        await Promise.all(promises);
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
  const token = await SecureStore.getItemAsync(AUTH_TOKEN_KEY);

  if (token) {
    const user = jwtDecode<User>(token);

    useUserStore.getState().setUser(user);
  }
};

export default useFirstLoad;
