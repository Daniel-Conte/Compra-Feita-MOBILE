import axios from '../config';
import carrinhoEndpoints from './endpoints';
import type {
  DeleteCarrinhoItemResponse,
  GetCarrinhoListResponse,
  InsertCarrinhoRequest,
  InsertCarrinhoResponse,
  UpdateQuantidadeCarrinhoItemRequest,
  UpdateQuantidadeCarrinhoItemResponse,
} from './types';

const carrinhoApi = {
  async getList() {
    const res: GetCarrinhoListResponse = await axios.get(carrinhoEndpoints.carrinho);

    return res;
  },
  async insert(payload: InsertCarrinhoRequest) {
    const res: InsertCarrinhoResponse = await axios.post(carrinhoEndpoints.carrinho, payload);

    return res;
  },
  async updateQuantidade(payload: UpdateQuantidadeCarrinhoItemRequest) {
    const res: UpdateQuantidadeCarrinhoItemResponse = await axios.put(
      carrinhoEndpoints.carrinho,
      payload,
    );

    return res;
  },
  async delete(codigo: number) {
    const res: DeleteCarrinhoItemResponse = await axios.delete(
      `${carrinhoEndpoints.carrinho}/${codigo}`,
    );

    return res;
  },
};

export default carrinhoApi;
