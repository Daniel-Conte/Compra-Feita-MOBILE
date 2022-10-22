export interface UserStore {
  user: User | null;

  setUser: (user: User | null) => void;
}

export type User = {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;
  admin: number;
  criadoEm: Date | null;
  atualizadoEm: Date | null;
  iat: number;
  exp: number;
};
