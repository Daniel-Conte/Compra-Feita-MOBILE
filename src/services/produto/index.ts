import axios from '../config';
import produtoEndpoints from './endpoints';
import type { GetProdutoListResponse, GetProdutoResponse } from './types';

const produtoApi = {
  async getList() {
    const res: GetProdutoListResponse = await axios.get(produtoEndpoints.produto);

    return res;
  },
  async get(codigo: number) {
    const res: GetProdutoResponse = await axios.get(`${produtoEndpoints.produto}/${codigo}`);

    return res;
  },
};

export default produtoApi;
