import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Email is requierd"),
  password: z.string().min(1, "Password is requierd")
})

export const RegisterSchema = z.object({
  email: z.string().email("Email is requierd"),
  password: z.string().min(6, "Minimum 6 characters requierd"),
  name: z.string().min(1, "Name is requierd")
})