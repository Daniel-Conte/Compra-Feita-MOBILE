import * as yup from 'yup';

const schema = yup.object({
  justificativa: yup.string().required(),
});

export default schema;
