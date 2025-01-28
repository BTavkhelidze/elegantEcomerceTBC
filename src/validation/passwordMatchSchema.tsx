import { z } from 'zod';

import { passwordShcema } from './passwordSchema';

export const passwordMatchSchema = z
  .object({
    password: passwordShcema,
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['passwordConfirm'],
        message: 'Password does not match',
      });
    }
  });
