import axios from '../config';
import usuariosEndpoints from './endpoints';
import type {
  UpdateUsuarioPushTokenResponse,
  UpdateUsuarioRequest,
  UpdateUsuarioResponse,
} from './types';

const usuariosApi = {
  async update(payload: UpdateUsuarioRequest) {
    const res: UpdateUsuarioResponse = await axios.put(
      `${usuariosEndpoints.usuario}?sessionUser=true`,
      payload,
    );

    return res;
  },
  async updatePushToken(pushToken?: string) {
    const res: UpdateUsuarioPushTokenResponse = await axios.put(usuariosEndpoints.pushToken, {
      pushToken,
    });

    return res;
  },
};

export default usuariosApi;
