import { z } from "zod";

export const usernameSchema = z
  .string()
  .trim()
  .min(3, "Username must be at least 3 characters")
  .max(30, "Username must be at most 30 characters")
  .regex(
    /^[a-zA-Z0-9_.]+$/,
    "Username may contain only letters, numbers, dots and underscores",
  );

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(200, "Password is too long");

export const registerSchema = z.object({
  username: usernameSchema,
  phone: z.string().trim().optional().or(z.literal("")),
  fullName: z.string().trim().max(100).optional().or(z.literal("")),
  school: z.string().trim().max(120).optional().or(z.literal("")),
  password: passwordSchema,
});

export const loginSchema = z.object({
  identifier: z.string().trim().min(1, "Enter your username or phone number"),
  password: z.string().min(1, "Enter your password"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
