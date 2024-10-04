import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Email is requierd"),
  password: z.string().min(1, "Password is requierd"),
  code: z.optional(z.string().min(6, "6 digets requierd"))
})

export const RegisterSchema = z.object({
  email: z.string().email("Email is requierd"),
  password: z.string().min(6, "Minimum 6 characters requierd"),
  name: z.string().min(1, "Name is requierd")
})

export const ResetPasswordSchema = z.object({
  email: z.string().email("Email is requierd"),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, "Minimum 6 characters requierd"),
})
