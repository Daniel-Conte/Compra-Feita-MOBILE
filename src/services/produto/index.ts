import axios from '../config';
import produtoEndpoints from './endpoints';
import type {
  DeleteProdutoResponse,
  GetProdutoListResponse,
  GetProdutoResponse,
  InsertProdutoRequest,
  InsertProdutoResponse,
  UpdateProdutoRequest,
  UpdateProdutoResponse,
} from './types';

const produtoApi = {
  async getList() {
    const res: GetProdutoListResponse = await axios.get(produtoEndpoints.produto);

    return res;
  },
  async get(codigo: number) {
    const res: GetProdutoResponse = await axios.get(`${produtoEndpoints.produto}/${codigo}`);

    return res;
  },
  async insert(payload: InsertProdutoRequest) {
    const res: InsertProdutoResponse = await axios.post(produtoEndpoints.produto, payload);

    return res;
  },
  async update(payload: UpdateProdutoRequest) {
    const res: UpdateProdutoResponse = await axios.put(produtoEndpoints.produto, payload);

    return res;
  },
  async delete(codigo: number) {
    const res: DeleteProdutoResponse = await axios.delete(`${produtoEndpoints.produto}/${codigo}`);

    return res;
  },
};

export default produtoApi;
