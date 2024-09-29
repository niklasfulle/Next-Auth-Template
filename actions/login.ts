"use server"
import * as z from "zod";
import bcrypt from "bcrypt"
import { db } from "@/lib/db"
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedField = LoginSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password } = validatedField.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: "Email already in use!" }
  }

  await db.user.findUnique({
    where: {
      email: email,
    }
  })

  return { success: "Email sent!" }
}