import * as z from 'zod';

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: 'Too short' }),
  username: z.string().min(2, { message: 'Too short' }).max(50),
  email: z
    .string()
    .min(8, { message: 'Password must be atleast 8 characters' }),
});
