import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import enderecoApi from '@services/endereco';
import useAppStore from '@store/App';
import parseError from '@utils/parseError';
import { cepMask } from '@components/Form/masks/cep';
import type { PerfilScreenNavigationProp, PerfilScreenRouteProp } from '@navigation/types';
import type { UpdateEnderecoRequest } from '@services/endereco/types';
import type { EnderecoFormValues } from './types';

const useEnderecoForm = () => {
  const navigation = useNavigation<PerfilScreenNavigationProp>();
  const route = useRoute<PerfilScreenRouteProp>();
  const toggleLoading = useAppStore(state => state.toggleLoading);
  const toggleSnackbar = useAppStore(state => state.toggleSnackbar);
  const [initialValues, _setInitialValues] = useState<EnderecoFormValues | undefined>(undefined);

  const mode = route.params.mode;

  useEffect(() => {
    const fetchEndereco = async (codigo: number) => {
      try {
        toggleLoading(true);
        const endereco = await enderecoApi.get(codigo);

        if (endereco?.data) {
          _setInitialValues({
            ...endereco.data,
            cep: cepMask(endereco.data.cep),
          } as EnderecoFormValues);
        }
      } catch (error) {
        const message = parseError(error);

        toggleSnackbar({ title: message, variant: 'danger' });
      } finally {
        toggleLoading(false);
      }
    };

    if (route.params.mode === 'edit') fetchEndereco(route.params.codigoEndereco);
  }, []);

  const onSubmit = async (data: EnderecoFormValues) => {
    try {
      toggleLoading(true);
      let resp;
      if (mode === 'new') {
        resp = await enderecoApi.insert(data);
      } else if (mode === 'edit' && data.codigo) {
        resp = await enderecoApi.update(data as UpdateEnderecoRequest);
      } else {
        throw new Error('Ocorreu um erro ao salvar o endereço');
      }

      if (!resp?.data) throw new Error('Ocorreu um erro ao salvar');

      toggleSnackbar({ title: resp.data.message, variant: 'success' });
      navigation.pop();
    } catch (error) {
      const message = parseError(error);

      toggleSnackbar({ title: message, variant: 'danger' });
    } finally {
      toggleLoading(false);
    }
  };

  return { onSubmit, initialValues, mode };
};

export default useEnderecoForm;
