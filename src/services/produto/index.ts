import axios from '../config';
import produtoEndpoints from './endpoints';
import type { GetProdutoListResponse } from './types';

const produtoApi = {
  async getList() {
    const res: GetProdutoListResponse = await axios.get(produtoEndpoints.produto);

    return res;
  },
};

export default produtoApi;
