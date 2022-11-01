import type { ApiResponse } from '@services/types';

export type Categoria = {
  codigo: number;
  nome: string;
  descricao: string | null;
  codigoCategoriaPai: number | null;
  criadoEm: Date;
  atualizadoEm: Date;
};

export type CategoriaListItem = Omit<Categoria, 'criadoEm' | 'atualizadoEm'>;

export type ListCategoriasResponse = ApiResponse<CategoriaListItem[]>;
