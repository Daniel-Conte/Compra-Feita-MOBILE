import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup.string().email().required(),
  senha: yup.string().min(8).required(),
});

export default loginSchema;
