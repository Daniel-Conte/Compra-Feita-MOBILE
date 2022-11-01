import axios from '../config';
import categoriaEndpoints from './endpoints';
import type { ListCategoriasResponse } from './types';

const categoriaApi = {
  async getAll() {
    const res: ListCategoriasResponse = await axios.get(categoriaEndpoints.categoria);

    return res;
  },
};

export default categoriaApi;
