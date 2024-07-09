"use server";
import { redirect } from "next/navigation";

import { createSession } from "@/util/sessions";
import { simpleHash, userVerified } from "@/util/user";
import { decrypt, encrypt } from "@/util/hash";
import bcrybt from "bcrypt";
export async function sendMessage(state, event) {
  const errors = [];
  const data = Object.fromEntries(event);
  const first_name = event.get("firstName");
  const last_name = event.get("lastName");
  const phone = event.get("phone_number");
  const email = event.get("email");
  const gender = event.get("gender");
  const message = event.get("message");
  if (first_name.trim().length == 0) errors.push("first_name");
  if (last_name.trim().length == 0) errors.push("last_name");
  if (phone.trim().length !== 11) errors.push("phone");
  if (
    !email.includes(".") ||
    !email.includes("@") ||
    email.slice(0, email.indexOf("@")).length == 0 ||
    email.slice(email.indexOf("@") + 1, email.indexOf(".")).length == 0 ||
    email.slice(email.indexOf(".") + 1).length == 0
  )
    errors.push("email");
  if (gender != "on") errors.push("gender");
  if (message.trim().length < 5) errors.push("message");
  if (errors.length > 0) return { errors };
  let response = await fetch("http://localhost:8080/contact/add-message", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  redirect("/");
}
export async function signin(state, event) {
  const user = Object.fromEntries(event);
  const name = event.get("name");
  const phone = event.get("phone");
  const email = event.get("email");
  const gender = event.get("gender");
  const password = event.get("password");
  const check_password = event.get("check_password");
  const errors = {
    name: "",
    phone: "",
    gender: "",
    email: "",
    password: "",
    check_password: "",
  };
  if (name.trim().length < 3) errors.name = "enter a valid name";
  if (phone.trim().length !== 11) errors.phone = "enter a valid phone number";
  if (gender !== "on") errors.gender = "please choose a gender";
  if (
    !email.includes(".") ||
    !email.includes("@") ||
    email.slice(0, email.indexOf("@")).length == 0 ||
    email.slice(email.indexOf("@") + 1, email.indexOf(".")).length == 0 ||
    email.slice(email.indexOf(".") + 1).length == 0
  )
    errors.email = "please enter a valid email";
  if (password.trim().length < 8 || password.trim().length > 16)
    errors.password =
      "please enter a valid password \n must be (8 <= characters <= 16)";
  if (
    check_password !== password ||
    check_password.trim().length < 8 ||
    check_password.trim().length > 16
  )
    errors.check_password = "check password must be like password";
  for (const value of Object.values(errors)) {
    if (value.length > 0) return { errors };
  }
  user.views = 0;
  user.followers = [];
  user.posts = [];
  const response = await fetch("http://localhost:8080/signup/create-user", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // ==========================================
  const session = await createSession(user.password);
  let decryptedSession = await decrypt(session);
  let encryptedPass = simpleHash(password)
  decryptedSession["email"] = email;
  decryptedSession["password"] = password;
  decryptedSession["encrypted"] = (session.slice(0, 5) + encryptedPass)
  decryptedSession["encrypted"].replace("undefined")
  await fetch("http://localhost:8080/signin/create-session", {
    method: "POST",
    body: JSON.stringify(decryptedSession),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(decryptedSession["encrypted"]);
  redirect(`/profile/${decryptedSession["encrypted"]}`);
}

export async function login(state, event) {
  const email = event.get("email");
  const password = event.get("password");
  const checkUser = JSON.parse(await userVerified(email, password));
  if (!checkUser.isVerified) return true;
  const session = await encrypt({ password });
  const id = session.slice(0, 5) + simpleHash(password)
  await createSession(password);
  redirect(`/profile/${id}`);
}
