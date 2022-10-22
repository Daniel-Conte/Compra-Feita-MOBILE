import authApi from '@services/auth';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';
import type { CadastroFormValues } from './types';

const useCadastro = (onSuccess: () => void) => {
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);

  const onSubmit = async (data: CadastroFormValues) => {
    try {
      toggleLoading(true);
      const resp = await authApi.register(data);

      if (!resp?.data) throw new Error('Ocorreu um erro no cadastro');

      toggleSnackbar({ title: resp.data, variant: 'success' });
      onSuccess();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  return { onSubmit };
};

export default useCadastro;
