import * as z from "zod";

export const UpdatedGuestDto = z.object({
  id: z.int(),
  first_name: z.string().min(1).max(60),
  last_name: z.string().min(1).max(60),
  email: z.email().max(100),
});

export const CreateGuestDto = z.object({
  first_name: z.string().min(1).max(60),
  last_name: z.string().min(1).max(60),
  email: z.email().max(100),
});
