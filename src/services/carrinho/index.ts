import axios from '../config';
import carrinhoEndpoints from './endpoints';
import type { InsertCarrinhoRequest, InsertCarrinhoResponse } from './types';

const carrinhoApi = {
  async insert(payload: InsertCarrinhoRequest) {
    const res: InsertCarrinhoResponse = await axios.post(carrinhoEndpoints.carrinho, payload);

    return res;
  },
};

export default carrinhoApi;
