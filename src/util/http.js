import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { simpleHash } from "./user";
import { revalidatePath } from "next/cache";
export async function createUser(user) {
  const checkRes = await fetch("http://localhost:8080/signup/check-user", {
    method: "POST",
    body: JSON.stringify({ email: user.email }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 1 },
  });
  const resData = await checkRes.json();
  const isExisting = JSON.parse(resData).isExisting;
  if (isExisting) return "THE EMAIL ALREADY EXISTS";
  const userRes = await fetch("http://localhost:8080/signup/create-user", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const userMessage = await userRes.json();
  return "USER CREATED";
}
export async function createSession(user, hashId) {
  const hashedId = await bcrypt.hash(hashId, 10);
  const date = new Date().toUTCString();
  const sessionData = {
    hashedId,
    prodDate: date,
    ExpDate: new Date().getFullYear() + 1000,
    email: user.email,
    password: user.password,
    id: simpleHash(hashId),
  };
  await fetch("http://localhost:8080/signup/create-session", {
    method: "POST",
    body: JSON.stringify(sessionData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath("/");
  redirect(`/profile/${sessionData.id}`);
}
