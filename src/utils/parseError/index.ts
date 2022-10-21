import { UnknownError } from './types';

const parseError = (error: unknown) => {
  const err = error as UnknownError;
  let message = 'Ocorreu um erro inesperado';

  if (err) {
    if (typeof err === 'string') message = err;
    else if (err.message) message = err.message;
  }

  return message;
};

export default parseError;
