export type ApiResponse<Data> = {
  data: Data;
  status: number;
};

export type MessageResponse = {
  message: string;
};

export type MessageTokenResponse = {
  message: string;
  token: string;
};
