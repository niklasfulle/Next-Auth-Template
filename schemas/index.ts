import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Email is requierd"),
  password: z.string().min(1, "Password is requierd")
})