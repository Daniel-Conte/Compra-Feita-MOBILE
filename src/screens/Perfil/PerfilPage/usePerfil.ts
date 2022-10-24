import * as SecureStore from 'expo-secure-store';

import usuariosApi from '@services/usuarios';
import useAppStore from '@store/App';
import useUserStore from '@store/User';
import { AUTH_TOKEN_KEY } from '@config/Constants';
import { phoneMask } from '@components/Form/masks/phone';
import parseError from '@utils/parseError';
import type { UserEditFormValues } from './types';

const usePerfil = () => {
  const _toggleLoading = useAppStore(state => state.toggleLoading);
  const _toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const _user = useUserStore(state => state.user);

  const initialValues: Partial<UserEditFormValues> = {
    email: _user?.email,
    nome: _user?.nome,
    telefone: phoneMask(_user?.telefone || ''),
  };

  const onSubmit = async (data: UserEditFormValues) => {
    try {
      if (!_user) throw new Error('Ocorreu um erro na edição');

      _toggleLoading(true);
      const resp = await usuariosApi.update({ ...data, codigo: _user.codigo });

      if (!resp?.data) throw new Error('Ocorreu um erro na edição do usuário');

      if (resp.data.token) {
        await SecureStore.setItemAsync(AUTH_TOKEN_KEY, resp.data.token);
      }

      _toggleSnackbar({ title: resp.data?.message, variant: 'success' });
    } catch (error) {
      const message = parseError(error);

      _toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      _toggleLoading(false);
    }
  };

  return { onSubmit, initialValues };
};

export default usePerfil;
