import axios from '../config';
import enderecoEndpoints from './endpoints';
import type {
  DeleteEnderecoResponse,
  GetEnderecoResponse,
  GetEnderecosResponse,
  InsertEnderecoRequest,
  InsertEnderecoResponse,
  UpdateEnderecoRequest,
  UpdateEnderecoResponse,
} from './types';

const enderecoApi = {
  async get(codigo: number) {
    const res: GetEnderecoResponse = await axios.get(`${enderecoEndpoints.endereco}/${codigo}`);

    return res;
  },
  async getAll() {
    const res: GetEnderecosResponse = await axios.get(enderecoEndpoints.endereco);

    return res;
  },
  async insert(payload: InsertEnderecoRequest) {
    const res: InsertEnderecoResponse = await axios.post(enderecoEndpoints.endereco, payload);

    return res;
  },
  async update(payload: UpdateEnderecoRequest) {
    const res: UpdateEnderecoResponse = await axios.put(enderecoEndpoints.endereco, payload);

    return res;
  },
  async delete(codigo: number) {
    const res: DeleteEnderecoResponse = await axios.delete(
      `${enderecoEndpoints.endereco}/${codigo}`,
    );

    return res;
  },
};

export default enderecoApi;
