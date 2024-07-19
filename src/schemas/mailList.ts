import * as yup from 'yup';

export const mailListSchema = yup.object({
  email: yup.string().trim().email().required(),
});

export type MailListInputs = yup.InferType<typeof mailListSchema>;
