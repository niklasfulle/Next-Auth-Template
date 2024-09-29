"use server"
import * as z from "zod";
import bcrypt from "bcrypt"
import { db } from "@/lib/db"
import { RegisterSchema } from "@/schemas"; import { getUserByEmail } from "@/data/user";
;

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password, name } = validatedField.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "Email already in use!" }
  }

  await db.user.create({
    data: {
      name: name,
      email: email,
      hashedPassword: hashedPassword
    }
  })

  // TODO: Send verification token Email

  return { success: "User created!" }
}