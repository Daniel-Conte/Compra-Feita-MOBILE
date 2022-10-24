import axios from '../config';
import usuariosEndpoints from './endpoints';
import type { UpdateUsuarioRequest, UpdateUsuarioResponse } from './types';

const usuariosApi = {
  async update(payload: UpdateUsuarioRequest) {
    const res: UpdateUsuarioResponse = await axios.put(
      `${usuariosEndpoints.usuario}?sessionUser=true`,
      payload,
    );

    return res;
  },
};

export default usuariosApi;
