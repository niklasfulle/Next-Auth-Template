"use server"

import { currentRole } from "@/lib/auth"
import { UserRole } from "@prisma/client"

export const admin = async () => {
  const role = await currentRole()

  if (role === UserRole.ADMIN) {
    return { error: "Allowed Server Action!" }
  }

  return { success: "Forbidden Server Action!" }
}