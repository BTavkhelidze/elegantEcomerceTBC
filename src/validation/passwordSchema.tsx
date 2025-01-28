import { z } from 'zod';

export const passwordShcema = z
  .string()
  .min(6, 'password must contain at least 6 character')
  .max(20, 'Maximum character 50');
